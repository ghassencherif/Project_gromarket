import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFiles } from "../JS/actions/userAction";

function UploadFiles({ match }) {
  const [name, setName] = useState("");
  const [path, setPath] = useState({});
  // const dispatch = useDispatch();
  const id = match.params.id;
  console.log(match.params.id);
  const onChange = (e) => {
    setName(e.target.files[0].name);
    setPath(e.target.files[0]);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", path);
    formData.append("image", name);
    axios.post(`/upload/${id}`, formData, {}).then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input type="file" name="name" onChange={onChange} />
        </div>
        <div>
          <button
            type="submit"
            style={{
              backgroundColor: "orange",
              padding: 10,
              width: 100,
              border: "none",
              borderRadius: 15,
              margin: 20,
            }}>
            upload
          </button>
        </div>
      </form>
    </div>
  );
}

export default UploadFiles;
