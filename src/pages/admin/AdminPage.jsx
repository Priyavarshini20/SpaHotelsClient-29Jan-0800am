import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NavbarAdmin from "../../components/NavbarAdmin";
//import User from "../../../../server/models/userModel";

const AdminPage = () => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  useEffect(() => {
    if (!user) {
      window.location.href = "/login";
    }
  }, []);
  useEffect(() => {
    if (!user.isAdmin) {
      window.location.href = "/home";
    }
  }, []);
  return (
    <>
      <h3 className="text-primary   w-full text-center text-3xl font-thin py-2">
        Admin Page
      </h3>
      <NavbarAdmin />
    </>
  );
};

export default AdminPage;
