import express from 'express';
import { getReservations, createReservation, deleteReservation } from '../controllers/reservationController.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

// All reservation routes require authentication
router.use(verifyToken);

router.get('/', getReservations);
router.post('/', createReservation);
router.delete('/:id', deleteReservation);

export default router;