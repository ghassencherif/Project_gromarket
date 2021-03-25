import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFiles } from "../JS/actions/userAction";

function UploadFiles({ id }) {
  const [name, setName] = useState("");
  const [path, setPath] = useState("");
  const dispatch = useDispatch();

  const addFile = (e) => {
    e.preventDefault();
    dispatch(
      addFiles({
        name,
        path,
        id,
      })
    );
  };

  const handleChange = (e) => {
    setName(e.target.files[0].name);
  };

  return (
    <div>
      <div>
        <form onSubmit={addFile}>
          <h3>Upload File</h3>
          <div>
            <input type="file" onChange={handleChange} />
          </div>
          <div>
            <button type="submit">upload</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UploadFiles;
