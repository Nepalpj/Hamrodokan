import React, { useEffect } from "react";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import About from "./pages/AboutUs/About";
import Moreinfo from "./pages/moreinfo/Moreinfo";
import Foooter from "./components/footer/Foooter";
import TopHeader from "./components/header/topheader/TopHeader";
import PageNotFound from "./pages/notfound/PageNotFound";
import Contact from "./pages/contact/Contact";
import Further from "./pages/AboutUs/Further";
import ProductDetails from "./pages/productDetails/ProductDetails";
import Register from "./pages/user/register/Register";
import Login from "./pages/user/register/login/Login";
import Profile from "./pages/user/register/profileinfo/Profile";
import ChangePassword from "./pages/user/register/changepassword/ChangePassword";
import ProtectedRoute from "./components/protectedroutes/ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import AdminDashboard from "./components/admin/AdminDashboard";
import { profile } from "./redux/features/authSlice";
import AddAdminProduct from "./components/admin/addAdminProduct/AddAdminProduct";

const App = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(profile());
    }
  }, [dispatch, isAuthenticated]);
  return (
    <>
      <Router>
        <ToastContainer />
        <TopHeader isAuthenticated={isAuthenticated} user={user} />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/product/details/:id"
            element={<ProductDetails />}
          />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/profile/information"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/changepassword"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <ChangePassword />
              </ProtectedRoute>
            }
          />

          <Route exact path="/about" element={<About />} />
          <Route
           exact path="/add/admin/products"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user && user.role === "admin"}
              >
                <AddAdminProduct />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/admin-namastebazzar/dashboard-panel"
            element={
              <ProtectedRoute
                isAuthenticated={isAuthenticated}
                adminRoute={true}
                isAdmin={user && user.role === "admin"}
              >
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          <Route exact path="/moreinfo" element={<Moreinfo />} />
          <Route exact path="*" element={<PageNotFound />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/further" element={<Further />} />
        </Routes>
        <Foooter />
      </Router>
    </>
  );
};

export default App;
