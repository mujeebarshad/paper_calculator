import { configureStore } from "@reduxjs/toolkit";
import paperWeight from "./paperWeight";
import paperAttribute from "./paperAttribute";

export default configureStore({
  reducer: {
    paperAttribute: paperAttribute,
    paperWeight: paperWeight
  }
});