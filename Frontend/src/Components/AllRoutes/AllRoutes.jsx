import React from "react";
import { Route, Routes } from "react-router-dom";
import Course from "../Course/Course";

import Home from "../Home";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import { Private } from "./Private";

export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            // <Private>
            <Home />
            // </Private>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/course" element={<Course />} />
      </Routes>
    </div>
  );
}
