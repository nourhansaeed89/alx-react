import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

export const chooseCourse = (courseId) => {
  return {
    type: SELECT_COURSE,
    payload: courseId,
  };
};

export const deselectCourse = (courseId) => {
  return {
    type: UNSELECT_COURSE,
    payload: courseId,
  };
};

