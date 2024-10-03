import { Router} from 'express';
import { faker } from '@faker-js/faker';

import {mockingPets, mockingUsers, generateData} from '../controllers/mocks.controller.js'

const router = Router()

router.get('/mockingpets', mockingPets);

router.get('/mockingusers', mockingUsers);

router.post('/generateData', generateData)


export default router;