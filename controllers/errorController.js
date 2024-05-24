export const globalErrorHandler = (err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    status: err.status || "Error",
    message: err.message || "Server Error",
    stack: err.stack,
    err: err,
  });
};
