import { Router } from 'express';

import * as contactController from '../controllers/contactController';

const router = Router();

router.get('/', contactController.getContacts);

router.get('/:contactId', contactController.getContactInfo);

router.delete('/:contactId', contactController.deleteContact);

router.delete('/', contactController.deleteContactByEmail);

router.post('/search', contactController.searchContacts);

router.post('/', contactController.createContact);

router.put('/:contactId', contactController.updateContact);

export default router;