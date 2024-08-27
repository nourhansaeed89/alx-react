import { chooseCourse, deselectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

describe('Course Action Creators', () => {
  it('should create an action to select a course', () => {
    const action = chooseCourse(1);
    expect(action).toEqual({ type: SELECT_COURSE, payload: 1 });
  });

  it('should create an action to deselect a course', () => {
    const action = deselectCourse(1);
    expect(action).toEqual({ type: UNSELECT_COURSE, payload: 1 });
  });
});
