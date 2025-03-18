import pool from '../config/db.js';

export const getReservations = async (req, res) => {
  try {
    console.log(`Getting reservations for user ${req.user.id}, role: ${req.user.role}`);
    const isManager = req.user.role === 'manager';
    let query = `
      SELECT r.*, a.name as apartment_name, u.name as user_name 
      FROM reservations r
      JOIN apartments a ON r.apartment_id = a.id
      JOIN users u ON r.user_id = u.id
    `;
    
    if (!isManager) {
      query += ' WHERE r.user_id = ?';
    }
    
    const [reservations] = await pool.query(query, isManager ? [] : [req.user.id]);
    console.log(`Found ${reservations.length} reservations`);
    res.json(reservations);
  } catch (error) {
    console.error('Error getting reservations:', error);
    res.status(500).json({ 
      message: 'Failed to fetch reservations',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined 
    });
  }
};

export const createReservation = async (req, res) => {
  try {
    const { apartment_id, check_in, check_out, total_price } = req.body;
    const user_id = req.user.id;

    console.log('Creating reservation:', {
      user_id,
      apartment_id,
      check_in,
      check_out,
      total_price
    });

    // Validate dates
    const startDate = new Date(check_in);
    const endDate = new Date(check_out);
    const now = new Date();

    if (startDate < now) {
      return res.status(400).json({ message: 'Check-in date cannot be in the past' });
    }

    if (endDate <= startDate) {
      return res.status(400).json({ message: 'Check-out date must be after check-in date' });
    }

    // Check if apartment exists
    const [apartments] = await pool.query('SELECT * FROM apartments WHERE id = ?', [apartment_id]);
    if (apartments.length === 0) {
      return res.status(404).json({ message: 'Apartment not found' });
    }

    // Check for overlapping reservations
    const [overlapping] = await pool.query(
      `SELECT * FROM reservations 
       WHERE apartment_id = ? 
       AND ((check_in BETWEEN ? AND ?) 
       OR (check_out BETWEEN ? AND ?)
       OR (check_in <= ? AND check_out >= ?))`,
      [apartment_id, check_in, check_out, check_in, check_out, check_in, check_out]
    );

    if (overlapping.length > 0) {
      return res.status(400).json({ message: 'This apartment is already booked for these dates' });
    }

    const [result] = await pool.query(
      'INSERT INTO reservations (user_id, apartment_id, check_in, check_out, total_price) VALUES (?, ?, ?, ?, ?)',
      [user_id, apartment_id, check_in, check_out, total_price]
    );

    console.log('Reservation created successfully:', result.insertId);
    res.status(201).json({ 
      message: 'Reservation created successfully',
      id: result.insertId
    });
  } catch (error) {
    console.error('Error creating reservation:', error);
    res.status(500).json({ 
      message: 'Failed to create reservation',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined 
    });
  }
};

export const deleteReservation = async (req, res) => {
  try {
    const { id } = req.params;
    const isManager = req.user.role === 'manager';
    
    console.log(`Attempting to delete reservation ${id} by user ${req.user.id} (${req.user.role})`);

    // Check if reservation exists and belongs to user
    const [reservation] = await pool.query(
      'SELECT * FROM reservations WHERE id = ?',
      [id]
    );

    if (reservation.length === 0) {
      return res.status(404).json({ message: 'Reservation not found' });
    }

    if (!isManager && reservation[0].user_id !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to delete this reservation' });
    }

    let query = 'DELETE FROM reservations WHERE id = ?';
    if (!isManager) {
      query += ' AND user_id = ?';
    }
    
    const [result] = await pool.query(query, isManager ? [id] : [id, req.user.id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Reservation not found or already deleted' });
    }

    console.log('Reservation deleted successfully');
    res.json({ message: 'Reservation deleted successfully' });
  } catch (error) {
    console.error('Error deleting reservation:', error);
    res.status(500).json({ 
      message: 'Failed to delete reservation',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined 
    });
  }
};