import express from "express";
import { allProductsAdmin, allproducts, createProduct, deleteProduct, singleproduct, updatePoduct } from "../controllers/productControllers.js";
import upload from "../file/upload.js";
import { isAuthAdmin, isAuthenticated } from "../middlewares/auth.js";
const router = express.Router();

//create product
router.post("/create/product",isAuthenticated,isAuthAdmin, upload.single("productImg"), createProduct);

//all product
router.get("/all/products", allproducts);
//single product
router.get("/single/product/:id",singleproduct);
router.put("/update/product/:id",isAuthenticated,isAuthAdmin,upload.single("productImg"), updatePoduct);
router.delete("/delete/product/:id",isAuthenticated,isAuthAdmin, deleteProduct);
//for admin route
router.route("/admin/all/products").get(isAuthenticated, isAuthAdmin, allProductsAdmin);








export default router;