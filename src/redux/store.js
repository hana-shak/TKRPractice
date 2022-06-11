import { configureStore } from "@reduxjs/toolkit";
import  counterSlice  from "./counter"
import { categoriesSlice } from "./categories";

export default configureStore({ 
    reducer : {
       counter : counterSlice,
       categories: categoriesSlice
}});

