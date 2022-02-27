import { Request, Response, NextFunction } from "express";

import * as contactService from '../services/contactService';
import { Contact } from '../protocols/Contact';

export async function getContacts(req: Request, res: Response, next: NextFunction): Promise<any>{
  try {
    const contacts: Contact[] =  await contactService.getAll();
    return res.status(200).send(contacts);
  } catch (error) {
    next(error);
  }
};
