import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";

export default store = configureStore({
  reducer: { user: userReducer },
});
