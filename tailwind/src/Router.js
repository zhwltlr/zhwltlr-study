import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RHookForm from "./RHookForm";
import TWStudy from "./TWStudy";
import PollForm from "./PollForm";
import "./App.css";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/rhookform" element={<RHookForm />} />
        <Route path="/poll" element={<PollForm />} />
        <Route path="/" element={<TWStudy />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
