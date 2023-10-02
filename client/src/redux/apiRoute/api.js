import axios from "axios";
const baseUrl = "http://localhost:4000/api/v1"
const API = axios.create({
    baseURL:baseUrl,
});

//interceptor
API.interceptors.request.use((req)=>{
    const token = localStorage.getItem("token");
    try {
        if(token){
            req.headers.Authorization =`Bearer ${token}`;
        }
    } catch (error) {
        console.log(error);
    }
    return req;
})
//user login
export const userLogin = (loginValue)=> API.post("/login",loginValue)

//profle
export const userProfile= ()=>API.get("/single/user")
//changepassword
export const changePassword=(changePasswordValue)=>API.put("/change/password",changePasswordValue)
//avatar
export const userAvatar = (updateForm)=> API.put("/update/user",updateForm);
//user regster
export const userRegister = (registerValue)=>API.post("/register",registerValue);
//get all Products
export const getProducts =()=> API.get("/all/products");
//get single product
export const getProduct = (id) => API.get(`/single/product/${id}`);
//admin all products(admin route)
export const allAdminProducts = ()=>API.get("/admin/all/products");