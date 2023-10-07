import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editUser } from "../store/CreateSlice";

const EditData = () => {
  const { id } = useParams();
  console.log("edit id :", id);

  const findEdit = useSelector((state) => state.user);
  console.log("edited data :", findEdit);

  const getData = findEdit.find((post) => post.id == id);
  console.log("getdata", getData);

  const [title, setTitle] = useState(getData?.title);
  const [image, setImage] = useState(getData?.image);

  // console.log(title, "TITLE");

  const nav = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, "TITLE", image, "IMAGE");
    const updateData = {
      id: id,
      title: title,
      image: image,
    };
    dispatch(editUser(updateData));
    nav("/");
  };

  return (
    <>
      <div>
        <h1 className="Add-post">Edit Post</h1>
        <br />
        <div className="add-form">
          <form className="form-data" onSubmit={handleSubmit}>
            <br />
            <br />
            <input
              type="text"
              className="input-box"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              required
            />
            <br />
            <br />
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              accept=".jpg, .png, .jpeg, .jfif"
              required
            />
            <br />
            <br />
            <button type="submit" className="Add-btn">
              {" "}
              Update Post
            </button>
            <button
              type="button"
              className="cancel-btn"
              onClick={() => nav("/")}
            >
              cancel
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditData;
