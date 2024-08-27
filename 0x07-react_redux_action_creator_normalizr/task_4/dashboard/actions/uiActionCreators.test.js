import { chooseCourse, deselectCourse } from './courseActionCreators';
import { COURSE_SELECTED, COURSE_DESELECTED } from './courseActionTypes';

describe('Course Action Creators', () => {
  it('should create an action to select a course', () => {
    const action = chooseCourse(1);
    expect(action).toEqual({ type: COURSE_SELECTED, payload: 1 });
  });

  it('should create an action to deselect a course', () => {
    const action = deselectCourse(1);
    expect(action).toEqual({ type: COURSE_DESELECTED, payload: 1 });
  });
});
