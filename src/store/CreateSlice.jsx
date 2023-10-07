import { createSlice } from "@reduxjs/toolkit";
// import UserData from "./UserData";

export const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser: (state = initialState, action) => {
      console.log("initialState : ", state);
      state.push(action.payload);
      return state;
    },

    editUser: (state, action) => {
      console.log("edited : ", action.payload);
      state.filter((ele) => {
        if (ele.id === action.payload.id) {
          ele.title = action.payload.title;
          ele.image = action.payload.image;
        }
      });
    },

    deleteUser: (state, action) => {
      console.log("delete : ", action.payload);
      console.log("delete state :", state);

      const id = action.payload;
      console.log("id : ", id);
      const findData = state.find((ele) => ele.id === id);
      console.log("find data :", findData);

      // logic starts from here
      const findPost = state.find((ele) => {
        return ele.id == id;
      });
      console.log("Ab :", findPost);
      if (findPost) {
        return state.filter((ele) => ele.id !== id);
      }
    },
  },
});

export const { addUser, editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
