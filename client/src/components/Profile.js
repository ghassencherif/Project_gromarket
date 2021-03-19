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
      <h1>This your profile</h1>
      <p>
        <a href="#">Formulaire</a>
      </p>
    </div>
  ) : (
    <Redirect to="/login" />
  );
}

export default Profile;
