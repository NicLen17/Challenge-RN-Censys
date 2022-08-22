const invalidUrl = (req, res, next) => {
  const error = new Error(`Accediendo a ${req.originalUrl}, recurso no encontrado`);
  error.statusCode = 404;
  next(error);
};

const errorHandler = (err, req, res, next) => {
  res.header('Content-Type', 'application/json');
  return res.status(err.statusCode || 500).json({
    status: err.statusCode || 500,
    message: err.message || err,
    error: 'Ocurrio un error en el servidor.',
    data: null,
  });
};

module.exports = { invalidUrl, errorHandler };
