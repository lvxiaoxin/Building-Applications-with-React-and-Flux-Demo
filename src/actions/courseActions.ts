import * as courseApi from '../api/courseApi';
import dispatcher from '../dispatcher/appDispatcher';
import { ICourse } from '../model/course';
import { actionTypes } from './actionTypes';

export const saveCourse = (course: ICourse) => {
    return courseApi.saveCourse(course).then(savedCourse => {
        dispatcher.dispatch({
            actionTypes: course.id ? actionTypes.UPDATE_COURSE : actionTypes.CREATE_COURSE,
            course: savedCourse
        });
    });
}

export const deleteCourse = (id: number) => {
    return courseApi.deleteCourse(id).then(() => {
        dispatcher.dispatch({
            actionTypes: actionTypes.DELETE_COURSE,
            id: id
        });
    });
}

export const loadCourses = () => {
    return courseApi.getCourse().then(courses => {
        dispatcher.dispatch({
            actionTypes: actionTypes.LOAD_COURSES,
            courses: courses
        });
    });
}