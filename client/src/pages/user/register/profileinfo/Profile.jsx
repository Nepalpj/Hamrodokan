import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearError, profile, updateUser } from "../../../../redux/features/authSlice";
import { toast } from "react-toastify";
import Loader from "../../../../components/layout/loader/Loader";
import Spinner from "react-bootstrap/Spinner";

const Profile = () => {
  const { user, loading, isLoading, error } = useSelector((state) => state.auth);


  const dispatch = useDispatch();
  const shownToastOnce = useRef(false);
  const [updateValue, setUpdateValue] = useState({
    fullName: "",
  });
  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("");
  const { fullName } = updateValue;

  const handelChange = (e) => {
    let { name, value } = e.target;
    setUpdateValue({ ...updateValue, [name]: value });
  };
  const handelInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onloadend = () => {
        setAvatarPreview(reader.result);
        setAvatar(file);
      };
    }
  };
  const handelSubmit = (e)=>{
    e.preventDefault();
    const updateForm = new FormData();
    updateForm.append("fullName",fullName)
    updateForm.append("avatar",avatar)
    dispatch(updateUser({updateForm,toast}))

  }
  useEffect(()=>{
    if(user){
      setUpdateValue({
        fullName:user.fullName || ""
      })
      setAvatarPreview(user?.avatar?.url || "")
    }
  },[user])
  useEffect(() => {
    if (error && !shownToastOnce.current) {
      toast.error(error);
      dispatch(clearError());
      shownToastOnce.current = true;
    }
    dispatch(profile());
  }, [dispatch, error]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="bg-[#f5f5f5] my-4 py-2">
            <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md mb-4 ">
              <h2 className="text-2xl font-semibold mb-4">Profile</h2>
              <form onSubmit={handelSubmit} >
                <div className="mb-4">
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
                    value={fullName}
                    onChange={handelChange}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="mt-1 text-gray-500 px-4 py-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
                    value={user?.email}
                    disabled
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="mobileNo"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="mobileNo"
                    name="mobileNo"
                    className="mt-1 text-gray-500 px-4 py-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
                    value={user.mobileNo}
                    disabled
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Role
                  </label>
                  <input
                    type="role"
                    id="role"
                    name="role"
                    className="mt-1 text-gray-500 px-4 py-2 border border-gray-300 rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
                    value={user.role}
                    disabled
                  />
                </div>
                <div className="pt-2">
                  <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                    onChange={handelInputChange}
                  />
                  <img
                    src={avatarPreview}
                    alt="avatar Img"
                    className="w-32 h-32 mt-3 object-cover"
                  />
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="py-2 px-4 bg-purple-950 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                   
                   {isLoading && <Spinner animation="border" size="sm" />} Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
