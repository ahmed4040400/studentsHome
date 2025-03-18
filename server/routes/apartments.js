import express from 'express';
import { getApartments, createApartment, deleteApartment } from '../controllers/apartmentController.js';
import { verifyToken, requireRole } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getApartments);
router.post('/', verifyToken, requireRole('manager'), createApartment);
router.delete('/:id', verifyToken, requireRole('manager'), deleteApartment);

export default router;