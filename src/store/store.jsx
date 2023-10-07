import { configureStore } from '@reduxjs/toolkit'
import  userReducer  from './CreateSlice'



 export const store = configureStore({
    reducer : {
        user : userReducer,
    },



    // middleware: getDefaultMiddleware =>
    // getDefaultMiddleware({
    //   serializableCheck: false,
    // }),
})

// export default store;