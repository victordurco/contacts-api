import { Request, Response, NextFunction } from "express";

import * as contactService from '../services/contactService';
import { Contact } from '../protocols/Contact';
import { newContactSchema } from '../validations/contactSchema'

export async function getContacts(req: Request, res: Response, next: NextFunction): Promise<any>{
  try {
    const contacts: Contact[] =  await contactService.getAll();
    return res.status(200).send(contacts);
  } catch (error) {
    next(error);
  }
};

export async function createContact (req: Request, res: Response, next: NextFunction): Promise<any>{
  const validation = newContactSchema.validate(req.body);
  if (validation.error) return res.sendStatus(400);

  try {
    const contactBody: Contact = req.body;
    await contactService.createContact(contactBody);
    return res.sendStatus(201);
  } catch (error) {
    if (error.name === "emailAlreadyExists") return res.status(409).send(error.message);
    next(error);
  }
};

export async function updateContact (req: Request, res: Response, next: NextFunction): Promise<any>{
  const { contactId } = req.params;
  const id = Number(contactId);
  if (!id || id < 1 || typeof id !== 'number') return res.sendStatus(400);

  const validation = newContactSchema.validate(req.body);
  if (validation.error) return res.sendStatus(400);

  try {
    const contactBody: Contact = req.body;
    await contactService.updateContact(id, contactBody);
    return res.sendStatus(204);
  } catch (error) {
    if (error.name === "emailAlreadyExists") return res.status(409).send(error.message);
    next(error);
  }
};
