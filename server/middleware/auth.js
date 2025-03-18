import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
      console.log('No authorization header provided');
      return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
      console.log('No token found in authorization header');
      return res.status(401).json({ message: 'Access denied. Invalid token format.' });
    }

    try {
      const verified = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
      req.user = verified;
      console.log('Token verified for user:', verified.id, 'with role:', verified.role);
      next();
    } catch (error) {
      console.error('Token verification failed:', error.message);
      if (error.name === 'TokenExpiredError') {
        return res.status(401).json({ message: 'Token has expired' });
      }
      return res.status(401).json({ message: 'Invalid token' });
    }
  } catch (error) {
    console.error('Auth middleware error:', error);
    next(error);
  }
};

export const requireRole = (role) => {
  return (req, res, next) => {
    try {
      if (!req.user) {
        console.log('No user found in request');
        return res.status(401).json({ message: 'Authentication required' });
      }

      if (req.user.role !== role) {
        console.log(`Role mismatch. Required: ${role}, Found: ${req.user.role}`);
        return res.status(403).json({ message: 'Access denied. Insufficient permissions.' });
      }

      next();
    } catch (error) {
      console.error('Role verification error:', error);
      next(error);
    }
  };
};