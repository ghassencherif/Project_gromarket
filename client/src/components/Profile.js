import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../JS/actions/userAction";

function Profile() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.user.loading);

  useEffect(() => {
    dispatch(getProfile());
    // setVerifier(isAuth);
  }, []);
  return localStorage.getItem("token") ? (
    <div>
      <h1>This you profile</h1>
    </div>
  ) : loading ? (
    <div className="spinner-border spinner" role="status">
      <span className="sr-only spin">Loading...</span>
    </div>
  ) : (
    <Redirect to="/login" />
  );
}

export default Profile;
