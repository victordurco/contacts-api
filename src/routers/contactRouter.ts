import { Router } from 'express';

import * as contactController from '../controllers/contactController';

const router = Router();

router.get('/', contactController.getContacts);

router.get('/:contactId', contactController.getContactInfo);

router.post('/', contactController.createContact);

router.put('/:contactId', contactController.updateContact);

export default router;