import { getRepository, getManager } from 'typeorm';

import ContactEntity from '../entities/ContactEntity';
import { emailAlreadyExists } from '../errors/contactErrors';

import { Contact } from '../protocols/Contact';

export async function getAll(): Promise<Contact[]> {
    const contacts = await getRepository(ContactEntity).find();
    
    return contacts;
}

export async function getContactByEmail(email: string): Promise<Contact[]> {
    const result = await getRepository(ContactEntity).find({email: email});
    return result; 
  }

export async function createContact(contact: Contact): Promise<Contact> {
    const usersWithThisEmail: Contact[] = await getContactByEmail(contact.email);
    if (usersWithThisEmail.length) throw new emailAlreadyExists();

    const newContact = await getRepository(ContactEntity).create(contact);
    await getRepository(ContactEntity).save(newContact);
    return newContact; 
  }