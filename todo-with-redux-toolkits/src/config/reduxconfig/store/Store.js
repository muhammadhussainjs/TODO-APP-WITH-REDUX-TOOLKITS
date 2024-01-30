import { configureStore } from "@reduxjs/toolkit";
import  todoReducer  from "../reducers/Todoslice";



export const store = configureStore({
    reducer: todoReducer
})



//useSelector is ka matlab redux se value mangwana 
//useDispatch is ka matlab redux me value bhejna