import { getRepository, getManager } from 'typeorm';

import ContactEntity from '../entities/ContactEntity';
import { newContactSchema } from '../validations/contactSchema';

import { Contact } from '../protocols/Contact';

export async function getAll(): Promise<Contact[]> {
    const contacts = await getRepository(ContactEntity).find();
    
    return contacts;
}

export async function createContact(contact: Contact): Promise<Contact> {

    const newContact = await getRepository(ContactEntity).create(contact);
    await getRepository(ContactEntity).save(newContact);
    return newContact; 
  }