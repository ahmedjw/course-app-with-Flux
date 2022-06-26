import { Route, Routes } from "react-router";
import React from "react";
import HomePage from "../components/pages/HomePage";
import AboutPage from "../components/pages/AboutPage";
import CoursesPage from "../components/pages/CoursesPage";
import NotFoundPage from "../components/shared/NotFoundPage";
import CoureseDetailsPage from "../components/shared/CoureseDetailsPage";
import CourseBuild from "../components/common/CourseBuild";

export default function RouterWraper() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/course/:course" element={<CoureseDetailsPage />} />
      <Route path="add-course" element={<CourseBuild />} />
      <Route element={<NotFoundPage />} />
    </Routes>
  );
}
