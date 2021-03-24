import React, { useEffect, useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../JS/actions/userAction";

function Profile() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.user.loading);
  const isAuth = useSelector((state) => state.user.isAuth);

  useEffect(() => {
    dispatch(getProfile());
  }, []);
  return !isAuth ? (
    <div className="spinner-border spinner" role="status">
      <span className="sr-only spin">Loading...</span>
    </div>
  ) : isAuth.isVerified === false ? (
    <Redirect to="/Verification" />
  ) : localStorage.getItem("token") ? (
    <div>
      <h1>
        Welcome, {isAuth.lastName} {isAuth.firstName}
      </h1>
      <p>Email : {isAuth.email}</p>
      <p>Email : {isAuth.address}</p>
      {isAuth.isVerified ? <p>Verified</p> : <p>not Verified</p>}
      <Link to="/profile/forms/">forms</Link>
    </div>
  ) : (
    <Redirect to="/login" />
  );
}

export default Profile;
