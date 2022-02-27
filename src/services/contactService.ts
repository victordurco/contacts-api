import { getRepository, getManager } from 'typeorm';

import ContactEntity from '../entities/ContactEntity';
import { InvalidContact } from '../errors/contactErrors';

import { Contact } from '../protocols/Contact';

export async function getAll(): Promise<Contact[]> {
    const contacts = await getRepository(ContactEntity).find();
    
    return contacts;
}
