import Product from "../models/productModel.js";
import path from "path";
import { join } from "path";
import fs from "fs";
import { unlink } from "fs/promises";
import { tryCatchAsyncError } from "../middlewares/tryCatchAsyncErrors.js";
import Errorhandler from "../utils/errorHandler.js";
import ApiFeatures from "../helpers/apiFeatures.js";

//create product
export const createProduct = tryCatchAsyncError(async (req, res, next) => {
  const {
    productName,
    description,
    category,
    price,
    ratings,
    manufacture,
    isInStock,
  } = req.body;
  if (
    !productName ||
    !description ||
    !category ||
    !price ||
    !manufacture ||
    !ratings ||
    !isInStock
  ) {
    if (req.file) {
      await unlink(req.file.path);
    }
    return next(new Errorhandler("please provide all fields!", 400));
  }

  const baseUrl = `${req.protocol}://${req.hostname}:${
    process.env.PORT || 4000
  }`;
  const imagePath = req.file.filename;
  let productImageurl;

  if (imagePath) {
    productImageurl = `${baseUrl}/gallery/${imagePath}.replace(/\\/g,"/")`
  }

  const product = await Product.create({
    productName,
    description,
    category,
    price,
    ratings,
    manufacture,
    isInStock,
    productImg: productImageurl ? { url: productImageurl } : undefined,
  });

  res.status(201).json({
    success: true,
    message: "product create sucessFully",
    product,
  });
});

//get all product

export const allproducts = tryCatchAsyncError(async (req, res, next) => {
  const resultPerPage= 6;
  const countDocument = await Product.countDocuments()
  const apiFeatures = new ApiFeatures(Product.find(),req.query).search().filter().pagination(resultPerPage);   // new for class object // .search() are method
  const products = await apiFeatures.query;


  if(!products) return next(new Errorhandler("products not found",404));

  res.status(200).json({
    success: true,
    message: "product get successfully!",
    products,
    resultPerPage,
    countDocument,
  });
});

//get single product by id
export const singleproduct = tryCatchAsyncError(async (req, res, next) => {
  const productId = req.params.id;
  const product = await Product.findById(productId);
  if (!product) return next(new Errorhandler("product not found!", 404));
  res.status(200).json({
    success: true,
    message: "product get sucessfully",
    data: product,
    
  });
});

//update  proucts
export const updatePoduct = tryCatchAsyncError(async (req, res) => {
  const productId = req.params.id;
  let product = await Product.findById(productId);

  if (!product) {
    if (req.file) {
      await unlink(req.file.path);
    }

    return next(new Errorhandler("product not found!", 404));
  }

  const {
    productName,
    description,
    category,
    price,
    ratings,
    manufacture,
    isInStock,
  } = req.body;
  if (
    !productName ||
    !description ||
    !category ||
    !price ||
    !manufacture ||
    !ratings ||
    !isInStock
  ) {
    if (req.file) {
      await unlink(req.file.path);
    }
    return res.status(400).json({
      success: false,
      message: "please provide all fields!",
    });
  }
  const existingImageUrl = product.productImg.url;
  const baseUrl = `${req.protocol}://${req.hostname}:${
    process.env.PORT || 4000
  }`;
  const imagePath = req.file.filename;
  let productImageurl;
  if (existingImageUrl) {
    const filename = path.basename(existingImageUrl);
    const previousPath = path.join("public", "gallery", filename);
    fs.unlinkSync(previousPath);
  }
  if (imagePath) {
    productImageurl = `${baseUrl}/gallery/${imagePath}.replace(/\\/g,"/")`
  }

  product.productName = productName;
  product.description = description;
  product.ratings = ratings;
  product.price = price;
  product.manufacture = manufacture;
  product.category = category;
  product.isInStock = isInStock;
  product.productImg = productImageurl ? { url: productImageurl } : undefined;

  await product.save();

  res.status(200).json({
    success: true,
    message: "product update sucessFully!",
    product,
  });
});

//delete product

export const deleteProduct = tryCatchAsyncError(async (req, res) => {
  const productId = req.params.id;
  const product = await Product.findById(productId);

  if (!product) {
    return next(new Errorhandler("product not found!", 404));
  }
  const existImageUrl = product.productImg.url;
  if (existImageUrl) {
    const filename = path.basename(existImageUrl);
    const previousPath = path.join("public", "gallery", filename);
    fs.unlinkSync(previousPath);
  }
  await product.deleteOne();
  res.status(200).json({
    success: true,
    message: "product delete sucessfully!",
  });
});

//get all products by admin(only)
export const allProductsAdmin = tryCatchAsyncError(async(req,res,next)=>{
  const products = await Product.find();
  if(!products) return next(new ErrorHandler("products not found"));
    return res.status(200).json({
      success: true,
      message: "all product fetch successfully!",
      data: products,
    });
})