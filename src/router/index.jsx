import React from "react";
import { Route, Routes } from "react-router";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import ProtectedRouter from "./ProtectedRouter";
import Layout from "./Layout";

function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/"
        element={
          <ProtectedRouter>
            <Layout />
          </ProtectedRouter>
        }
      >
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default Router;
