export const errorHandler = (err, req, res, next) => {
  console.error('Uncaught error:', {
    error: err,
    path: req.path,
    method: req.method,
    body: req.body,
    query: req.query,
    params: req.params
  });

  // Handle specific error types
  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({ message: 'Invalid token' });
  }

  if (err.name === 'TokenExpiredError') {
    return res.status(401).json({ message: 'Token expired' });
  }

  if (err.code === 'ER_DUP_ENTRY') {
    return res.status(400).json({ message: 'Duplicate entry not allowed' });
  }

  // Default error response
  res.status(500).json({
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
};