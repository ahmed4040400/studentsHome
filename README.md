# Student Homes Apartment Booking System

A full-stack web application built with Vue.js 3 (Frontend) and Node.js/Express (Backend) for managing student apartment bookings. The system supports both guest users for booking apartments and managers for administering the system.

## Prerequisites

- Node.js (Latest LTS version recommended)
- MySQL (v5.7 or higher)
- npm package manager

## Project Structure

```
apartments/
├── src/                  # Frontend Vue.js application
├── server/              # Backend Node.js application
├── public/             # Static assets
└── README.md
```

## Setup Instructions

### 1. Database Setup

1. Make sure MySQL is installed and running
2. Create a `.env` file in the `server` directory with the following content:
   ```
   DB_HOST=localhost
   DB_USER=root2
   DB_PASSWORD=password
   DB_PORT=3306
   DB_NAME=student_homes
   JWT_SECRET=your-secret-key-here
   ```

### 2. Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Initialize the database and create admin users:
   ```bash
   npm run seed:db   # Initialize database with sample apartments and users
   npm run seed      # Create admin users
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The backend server will start on `http://localhost:3000`

### 3. Frontend Setup

1. Navigate to the project root directory:
   ```bash
   cd ..  # If you're in the server directory
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The frontend application will start on `http://localhost:5173`

## Access Information

### Guest Access
- URL: `http://localhost:5173/`
- Create a new account or login with existing guest credentials
- Guests can:
  - View available apartments
  - Make reservations
  - View their own reservations

### Admin/Manager Access
- Admin Dashboard URL: `http://localhost:5173/admin/managerLogin`
- Default admin credentials:
  1. First Admin:
     - Email: admin@example.com
     - Password: testtest
  2. Second Admin:
     - Email: admin@email.com
     - Password: testtest
- Managers can:
  - Add/delete apartments
  - View all reservations
  - Manage bookings

## Available Scripts

### Backend (in server directory)
- `npm run dev`: Start development server with nodemon
- `npm start`: Start production server
- `npm run seed`: Create admin users
- `npm run seed:db`: Initialize database with sample data

### Frontend (in root directory)
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build

## Technologies Used

### Frontend
- Vue.js 3
- TypeScript
- Vue Router
- Tailwind CSS
- Axios for API calls

### Backend
- Node.js with Express.js
- MySQL2 for database
- JWT for authentication
- bcrypt for password hashing
- CORS enabled

## Features

- User Authentication
  - Guest registration and login
  - Manager registration and login
  - Role-based access control
- Apartment Management
  - List available apartments
  - Add new apartments (managers only)
  - Delete apartments (managers only)
- Reservation System
  - Create reservations
  - View reservations
  - Delete reservations
- Responsive Arabic UI
- Secure password handling
- JWT-based authentication

## Security Notes

- All passwords are hashed using bcrypt
- API routes are protected with JWT authentication
- Role-based access control implemented
- Environment variables used for sensitive data

## Additional Notes

- The application uses Arabic as the primary language
- Make sure both frontend and backend servers are running simultaneously
- Database tables are created automatically when running `npm run seed:db`
- Check server logs for any database connection issues
- Default admin users are created when running `npm run seed`
