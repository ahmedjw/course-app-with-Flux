import EventEmitter from "events";
import { actionTypes } from "../actions/ActionTypes";
import { dispatcher } from "../StoreDispatcher";
let Courses = [];
const CHANGE_EVENT = "change";
class CourseSotre extends EventEmitter {
  addEventListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }
  removeEventListener() {
    this.removeEventListener(CHANGE_EVENT);
  }
  emitChange() {
    this.emit(CHANGE_EVENT);
  }
  gitCourses() {
    return Courses;
  }
  getCourseBySlug(slug) {
    return Courses.find((item) => item.slug === slug);
  }
  DeleteCourse(id) {
    Courses = Courses.filter((item) => item.id !== id);
  }
  addToStore(course) {
    Courses.push();
  }
}
const Store = new CourseSotre();
export default Store;
dispatcher.register((action) => {
  switch (action.actionType) {
    case actionTypes.CREATE_COURSE:
      Store.addToStore(action.course);
      Store.emitChange();
      break;
    case actionTypes.GET_COURSES:
      Courses = action.course;
      Store.emitChange();
      break;
    case actionTypes.DELETE_COURSE:
      Store.DeleteCourse(action.courseId);
      Store.emitChange();
    default:
    //nothing
  }
});
