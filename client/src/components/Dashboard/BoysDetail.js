import axios from "axios";
import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getBoy, getBoys } from "../../JS/actions/boysAction";

function BoysDetail({ boys, match }) {
  const id = match.params.id;

  const boy = boys.find((el) => el._id === match.params.id);
  // const dispatch = useDispatch();
  console.log(boy);

  return (
    <div>
      <h3>Personal Info</h3>
      <p>
        Full Name: {boy.lastName} {boy.firstName}
      </p>
      <p>Address: {boy.address}</p>
      <p>Email: {boy.email}</p>
      {boy.isVerified ? <p>Verified</p> : <p>Not Verified</p>}
      <h3>Application</h3>
      {boy.surveys.map((survey, i) => (
        <div key={i}>
          <ul>
            <span style={{ fontWeight: "bold" }}>Question {i + 1}</span> :{" "}
            {survey.question}
          </ul>
          <ul>
            <span style={{ fontWeight: "bold" }}>Answer: </span>
            {survey.responce}
          </ul>
        </div>
      ))}
      <h3>Documents</h3>
      {boy.images.map((image, i) => (
        <img
          style={{ width: 600, marginBottom: 30 }}
          src={`http://localhost:5000/uploads/${image.name}`}
          key={i}
          alt="Hey"
        />
      ))}
    </div>
  );
}

export default BoysDetail;
