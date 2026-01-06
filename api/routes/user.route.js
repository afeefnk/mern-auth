import express from 'express';
import { test } from '../controllers/user.controller.js';

const router = express.Router();

// Sample route for user profile
router.get('/', test);

export default router;