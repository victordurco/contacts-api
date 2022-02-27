import { Router } from 'express';

import * as contactController from '../controllers/contactController';

const router = Router();

router.get('/', contactController.getContacts);

router.post('/', contactController.createContact);

export default router;