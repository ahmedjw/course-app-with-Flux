import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { gitCourses } from "../../actions/CourseActions";
import Store from "../../sotres/store";
import CourseList from "../shared/CourseList";

function CoursesPage() {
  const [courses, setCourses] = useState(Store.gitCourses());

  useEffect(() => {
    Store.addEventListener(onChange);
    gitCourses();
  }, []);
  const onChange = () => {
    setCourses(Store.gitCourses());
  };
  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/add-course">
        Add Course
      </Link>
      <CourseList courses={courses} />
    </>
  );
}

export default CoursesPage;
