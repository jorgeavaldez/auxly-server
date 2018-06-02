export const errorHandler = (err, req, res, next) => {
  res.status(500).json({ error: err.message, stacktrace: err.stack });
  next();
};

export default {
  errorHandler,
};
