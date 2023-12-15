// this is the store provider
"use client";
import { store } from "@/store/store";
import { Provider } from "react-redux";

const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
export default StoreProvider;
