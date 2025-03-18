import pool from '../config/db.js';

export const getApartments = async (req, res) => {
  try {
    console.log('Fetching all apartments');
    const [apartments] = await pool.query('SELECT * FROM apartments ORDER BY created_at DESC');
    console.log(`Found ${apartments.length} apartments`);
    res.json(apartments);
  } catch (error) {
    console.error('Error fetching apartments:', error);
    res.status(500).json({ 
      message: 'Failed to fetch apartments',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined 
    });
  }
};

export const createApartment = async (req, res) => {
  try {
    const { name, description, image_url, distance, rating, reviews, price } = req.body;
    console.log('Creating new apartment:', { name, description, distance, rating, reviews, price });

    // Validate required fields
    if (!name || !description || !image_url || !distance || !rating || !price) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Validate rating range
    if (rating < 0 || rating > 5) {
      return res.status(400).json({ message: 'Rating must be between 0 and 5' });
    }

    // Validate reviews is non-negative
    if (reviews < 0) {
      return res.status(400).json({ message: 'Reviews count cannot be negative' });
    }

    if (req.user.role !== 'manager') {
      console.log('Unauthorized attempt to create apartment by user:', req.user.id);
      return res.status(403).json({ message: 'Only managers can create apartments' });
    }

    const [result] = await pool.query(
      'INSERT INTO apartments (name, description, image_url, distance, rating, reviews, price) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [name, description, image_url, distance, rating, reviews, price]
    );

    console.log('Apartment created successfully:', result.insertId);
    res.status(201).json({ 
      message: 'Apartment created successfully',
      id: result.insertId
    });
  } catch (error) {
    console.error('Error creating apartment:', error);
    res.status(500).json({ 
      message: 'Failed to create apartment',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined 
    });
  }
};

export const deleteApartment = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`Attempting to delete apartment ${id} by user ${req.user.id}`);

    if (req.user.role !== 'manager') {
      console.log('Unauthorized attempt to delete apartment');
      return res.status(403).json({ message: 'Only managers can delete apartments' });
    }

    // Check if apartment exists
    const [apartment] = await pool.query('SELECT * FROM apartments WHERE id = ?', [id]);
    if (apartment.length === 0) {
      return res.status(404).json({ message: 'Apartment not found' });
    }

    // Check if there are any active reservations
    const [activeReservations] = await pool.query(
      'SELECT COUNT(*) as count FROM reservations WHERE apartment_id = ? AND check_out >= CURDATE()',
      [id]
    );

    if (activeReservations[0].count > 0) {
      return res.status(400).json({ 
        message: 'Cannot delete apartment with active reservations' 
      });
    }

    const [result] = await pool.query('DELETE FROM apartments WHERE id = ?', [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Apartment not found or already deleted' });
    }

    console.log('Apartment deleted successfully');
    res.json({ message: 'Apartment deleted successfully' });
  } catch (error) {
    console.error('Error deleting apartment:', error);
    res.status(500).json({ 
      message: 'Failed to delete apartment',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined 
    });
  }
};