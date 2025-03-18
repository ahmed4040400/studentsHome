import bcrypt from 'bcrypt';
import pool from '../config/db.js';

const seedAdmins = async () => {
  try {
    // Hash passwords
    const password = 'testtest';
    const hashedPassword = await bcrypt.hash(password, 10);

    // Define admin users
    const admins = [
      {
        name: 'Admin',
        username: 'admin',
        email: 'admin@example.com',
        password: hashedPassword,
        role: 'manager'
      },
      {
        name: 'Admin 2',
        username: 'admin2',
        email: 'admin@email.com',
        password: hashedPassword,
        role: 'manager'
      }
    ];

    // Insert admins
    for (const admin of admins) {
      const [existingUser] = await pool.query('SELECT * FROM users WHERE email = ?', [admin.email]);
      
      if (existingUser.length === 0) {
        await pool.query(
          'INSERT INTO users (name, username, email, password, role) VALUES (?, ?, ?, ?, ?)',
          [admin.name, admin.username, admin.email, admin.password, admin.role]
        );
        console.log(`Admin user ${admin.email} created successfully`);
      } else {
        console.log(`Admin user ${admin.email} already exists`);
      }
    }

    console.log('Admin seeding completed');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding admin users:', error);
    process.exit(1);
  }
};

seedAdmins();