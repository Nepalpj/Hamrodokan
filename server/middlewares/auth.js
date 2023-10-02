import { json } from "express";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import { tryCatchAsyncError } from "./tryCatchAsyncErrors.js";
import Errorhandler from "../utils/errorHandler.js";

//for Authentication user
export const isAuthenticated = tryCatchAsyncError(async (req, res, next) => {
  const token = req?.headers?.authorization?.replace("Bearer ", "");
  if (!token) return next(new Errorhandler("please login first", 401));

  const decodeData = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findById(decodeData.id);
  if (!user) return next(new Errorhandler("user doesn't exists!", 400));
  req.user = user;
  next();
});

//for admin
export const isAuthAdmin = tryCatchAsyncError(async (req, res, next) => {
  if (!req.user)
    return next(
      new Errorhandler(
        "you are not authentication to access this resource!",
        401
      )
    );

  if (req.user.role !== "admin")
    return next(
      new Errorhandler(`${req.user.role} is not authorized to this role`, 403)
    );
  next();
});
