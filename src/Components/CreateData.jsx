import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import {v4 as uuidv4} from "uuid"
import { addUser } from "../store/CreateSlice";
import {useDispatch} from "react-redux" 

const CreateData = () => {

const [title, setTitle] = useState('');
const [image, setImage] = useState('');
const nav = useNavigate();
const dispatch = useDispatch();

const handleSubmit =(e)=>{
e.preventDefault();
const Data = {
  id: uuidv4(),
  title,
  image,
}
console.log("crate : ", Data);
dispatch(addUser(Data));
nav("/")
}
// console.log("data:", title, image);
  return (
    <>
      <div>
        <h1 className="Add-post">Add Post</h1>
        <br />
        <div className="add-form">
          <form className="form-data" onSubmit={handleSubmit}>
            <br />
            <input
              type="text"
              className="input-box"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Title Here..."
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
             
              Add Post
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

export default CreateData;
