const baseUrl = process.env.REACT_APP_API_URL + "/courses/";
const axios = require("axios");

export const getCourses = async () => {
  const { data } = await axios.get(baseUrl);
  return data;
};
export const getCourseBySlug = async (slug) => {
  const { data } = await axios.get(baseUrl + "?slug=" + slug);
  return data[0];
};
export const deleteCourse = async (courseId) => {
  await axios.delete(baseUrl + courseId);
};
export const createCourse = async (CourseData) => {
  await axios.post(baseUrl, CourseData);
};
