import React from "react";
import { HomeUI } from "../components/HomeUI";
import { ContextProvider } from "../data/Context";

export const Home = () => {
  return (
    <ContextProvider>
      <HomeUI />
    </ContextProvider>
  );
};
