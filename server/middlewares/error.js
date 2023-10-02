import Errorhandler from "../utils/errorHandler.js";
export const errorListening = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "internal server error!";

  //wrong mongoID error
  if (err.name === "CastError") {
    const message = `Resource not found:${err.path}`;
    err = new Errorhandler(message, 400);
  }

  //duplicate mongo error
  if (err.code === 11000) {
    const message = `Duplicate : ${Object.keys(err.keyValue)} Entered`;
    err = new Errorhandler(message, 400);
  }

  //jsonwebtoken error
  if (err.name === "JsonWebTokenError") {
    const message = `Invalid token, try again!`;
    err = new Errorhandler(message, 400);
  }

  //token expired
  if (err.name === "TokenExpiredError") {
    const message = `Token has been expired!`;
    err = new Errorhandler(message, 400);
  }

  // multerError
  if (err.name === "MulterError") {
    const message = `Error uploading file:${err.message}`;
    err = new Errorhandler(message, 400);
  }
  //ErrNotFound
  if (err.name === "ENOTFOUND") {
    const message = `Connection Error: Unable to connect the server! `;
    err = new Errorhandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
