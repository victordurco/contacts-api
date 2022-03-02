import { getRepository, Like } from 'typeorm';

import ContactEntity from '../entities/ContactEntity';
import { EmailAlreadyExists, InvalidContact } from '../errors/contactErrors';

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
    if (usersWithThisEmail.length) throw new EmailAlreadyExists();

    const newContact: Contact = await getRepository(ContactEntity).create(contact);
    await getRepository(ContactEntity).save(newContact);
    return newContact; 
  }

export async function updateContact(id: number, updatedContact: Contact): Promise<any> {
    const usersWithThisEmail: Contact[] = await getContactByEmail(updatedContact.email);

    let contactToUpdate: Contact = await getRepository(ContactEntity).findOne({ where: { id: id } });

    if (usersWithThisEmail.length && usersWithThisEmail[0].email !== contactToUpdate.email) throw new EmailAlreadyExists();

    contactToUpdate.id = id;
    contactToUpdate.name = updatedContact.name;
    contactToUpdate.phone = updatedContact.phone;
    contactToUpdate.email = updatedContact.email;
    await getRepository(ContactEntity).save(contactToUpdate);
}

export async function getById(id: number): Promise<Contact> {
  const result: Contact[] = await getRepository(ContactEntity).find({ id: id });
  if (!result[0]) throw new InvalidContact();
  return result[0]; 
}
  
export async function deleteContact(id: number): Promise<void> {
  const contact: Contact = await getById(id);
  if (!contact) throw new InvalidContact();

  await getRepository(ContactEntity).delete({ id: id });
}
  
export async function searchContacts(searchedName: string): Promise<Contact[]> {
    const contacts: Contact[] = await getRepository(ContactEntity).find({
    name: Like(`%${searchedName}%`)
});
    
    return contacts;
}

export async function deleteContactByEmail(email: string): Promise<void> {
  const contact: Contact[] = await getContactByEmail(email);
  if (!contact[0]) throw new InvalidContact();

  await getRepository(ContactEntity).delete({ email: email });
}