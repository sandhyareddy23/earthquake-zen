import React from "react";
import { Route, Routes } from "react-router-dom";
import Details from "./Details";
import Home from "./Home";
import Profile from "./Profile";

const AppRoutes = ({ details }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home earthQuakeDetails={details.data} />}
      ></Route>
      <Route path="/details" element={<Details />}></Route>
      <Route
        path="/profile"
        element={<Profile profileDetails={details.profile} />}
      ></Route>
    </Routes>
  );
};

export default AppRoutes;
