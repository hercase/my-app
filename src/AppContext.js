import { createContext } from "react";

// Global State

export const initialState = {
  counter: 0,
};

export const AppContext = createContext(null);
