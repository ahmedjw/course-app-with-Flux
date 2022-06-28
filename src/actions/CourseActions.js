import * as courseApi from "../api/courseApi";
import Store from "../sotres/store";
import { dispatcher } from "../StoreDispatcher";
import { actionTypes } from "./ActionTypes";

export function createCourse(values) {
  courseApi.createCourse(values).then((CreatedCourse) => {
    dispatcher.dispatch({
      actionType: actionTypes.CREATE_COURSE,
      course: CreatedCourse,
    });
  });
}
export function gitCourses() {
  courseApi.getCourses().then((courses) =>
    dispatcher.dispatch({
      actionType: actionTypes.GET_COURSES,
      course: courses,
    })
  );
}
export function deleteCourse(courseId) {
  courseApi.deleteCourse(courseId);
  dispatcher.dispatch({
    actionType: actionTypes.DELETE_COURSE,
    courseId: courseId,
  });
}
