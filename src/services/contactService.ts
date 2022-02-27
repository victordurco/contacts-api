import { getRepository, getManager } from 'typeorm';

import ContactEntity from '../entities/ContactEntity';
import { emailAlreadyExists } from '../errors/contactErrors';

import { Contact } from '../protocols/Contact';

export async function getAll(): Promise<Contact[]> {
    const contacts = await getRepository(ContactEntity).find();
    
    return contacts;
}

export async function getContactByEmail(email: string): Promise<Contact[]> {
    const result: Contact[] = await getRepository(ContactEntity).find({email: email});
    return result; 
  }

export async function createContact(contact: Contact): Promise<Contact> {
    const usersWithThisEmail: Contact[] = await getContactByEmail(contact.email);
    if (usersWithThisEmail.length) throw new emailAlreadyExists();

    const newContact: Contact = await getRepository(ContactEntity).create(contact);
    await getRepository(ContactEntity).save(newContact);
    return newContact; 
  }

export async function updateContact(id: number, updatedContact: Contact): Promise<any> {
    const usersWithThisEmail: Contact[] = await getContactByEmail(updatedContact.email);

    let contactToUpdate: Contact = await getRepository(ContactEntity).findOne({ where: { id: id } });

    if (usersWithThisEmail.length && usersWithThisEmail[0].email !== contactToUpdate.email) throw new emailAlreadyExists();

    contactToUpdate.id = id;
    contactToUpdate.name = updatedContact.name;
    contactToUpdate.phone = updatedContact.phone;
    contactToUpdate.email = updatedContact.email;
    await getRepository(ContactEntity).save(contactToUpdate);
}
