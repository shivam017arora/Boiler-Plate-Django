import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import { ContextProvider } from "../context";

const routes = (
  <BrowserRouter>
    <ContextProvider>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
    </ContextProvider>
  </BrowserRouter>
);

const appDiv = document.getElementById("app");
render(routes, appDiv);
