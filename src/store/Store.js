import { configureStore } from "@reduxjs/toolkit";
import country from "./country";

export const store = configureStore({ reducer: { country } });
