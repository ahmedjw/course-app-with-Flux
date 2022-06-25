import React from "react";
import { useParams } from "react-router-dom";
import getCourseDetails from "../../Hooks/GetCourseDetails";

const CoureseDetailsPage = () => {
  let { course } = useParams();
  const { data, isError, isLoading, err } = getCourseDetails({ course });
  if (isLoading) {
    return <h4>isLoading .....</h4>;
  }
  if (isError) {
    return <h4>there is an Error : {err}</h4>;
  }
  return (
    <>
      <h2>Manage Course</h2>
      <h2>{data.title}</h2>
    </>
  );
};

export default CoureseDetailsPage;
