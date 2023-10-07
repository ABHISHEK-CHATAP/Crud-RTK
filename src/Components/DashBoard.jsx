import React from "react";
import {useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux"
import { deleteUser } from "../store/CreateSlice";

const DashBoard = () => {
const nav = useNavigate();
const stateUser = useSelector((state)=> state.user)
console.log("stateUser : " , stateUser);
const dispatch = useDispatch();

const handleDelete=(id)=>{
  window.confirm("Do You want to Delete..") ? dispatch(deleteUser(id)) : null
}

  return (
    <>
      <div className="main">
        <span className="hero">
          <h3 className="name">Posts</h3>
          <button className="create-btn" onClick={() => nav("/Create")}>
            Create
          </button>
        </span>
      </div>
<br/>
      {
        stateUser.map((post)=>{
          return(
            <div id='list' key={post.id}>
            <div className='post-list'>
            <span className='post-child'>
                <h4>Title <span className='title-name'>: {post.title}</span> </h4>
                <p> <b>id <b className='colon'>:</b> </b>{post.id}</p>
                <br />
                <button className='edit-btn' onClick={()=> nav(`/edit/${post.id}`)}>Edit</button>
                <button className='delete-btn' onClick={()=>handleDelete(post.id)}>Delete</button>
            </span>
            <span>
                <img className='crud-image' src={URL.createObjectURL(post?.image)} alt='image' />
            </span>
        </div>
        </div>    
          )
        })
      }

    </>
  );
};

export default DashBoard;
