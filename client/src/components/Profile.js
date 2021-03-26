import React, { useEffect, useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../JS/actions/userAction";
import UploadFiles from "./UploadFiles";

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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>
          Welcome, {isAuth.lastName} {isAuth.firstName}
        </h1>
      </div>
      <div style={{ display: "flex", float: "right", marginRight: 100 }}>
        <Link
          to={`/profile/${isAuth._id}`}
          style={{
            textDecoration: "none",
            backgroundColor: "orange",
            padding: 10,
            borderRadius: 15,
            color: "Green",
            fontWeight: "bold",
            cursor: "pointer",
          }}>
          Apply for Delivey Boy
        </Link>
      </div>
      <div style={{ margin: 50, marginLeft: 250 }}>
        <h3>Email:</h3>
        <p>{isAuth.email}</p>
        <h3>Address:</h3>
        <p>{isAuth.address}</p>
        <h3>Status:</h3>
        {isAuth.isVerified ? <p>Verified</p> : <p>not Verified</p>}
        <h3>Files to upload: </h3>
        <p>
          Upload your License{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>Both Side</span>
          <Link to={`/profile/upload/${isAuth._id}`}>upload</Link>
        </p>
        <p>
          Upload your ID{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>Both Side</span>
        </p>
        <Link to={`/profile/upload/${isAuth._id}`}>upload</Link>
        <p>Upload your SSN</p>
        <Link to={`/profile/upload/${isAuth._id}`}>upload</Link>
      </div>
    </div>
  ) : (
    <Redirect to="/login" />
  );
}

export default Profile;
