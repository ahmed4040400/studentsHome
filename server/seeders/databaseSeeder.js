import mysql from 'mysql2/promise';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function seedDatabase() {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root2',
        password: process.env.DB_PASSWORD || 'password',
        port: parseInt(process.env.DB_PORT || '3306'),
        multipleStatements: true // Enable multiple statements
    });

    try {
        console.log('Reading init.sql file...');
        const sqlPath = path.join(__dirname, '..', 'init.sql');
        const sqlContent = await fs.readFile(sqlPath, 'utf8');

        console.log('Executing SQL statements...');
        await connection.query(sqlContent);
        
        console.log('Database seeded successfully!');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        await connection.end();
    }
}

// Run the seeder
seedDatabase();