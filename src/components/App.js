import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import CoursesPage from "./courses/CoursesPage";

export default function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/couses" element={<CoursesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
