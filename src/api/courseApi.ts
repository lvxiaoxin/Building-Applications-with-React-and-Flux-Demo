import * as _ from 'lodash';

import { ICourse } from '../model/course';
import { handleError, handleResponse } from './apiUtils';

const baseUrl = process.env.REACT_APP_API_URL + '/courses/';

export const getCourse = (): Promise<ICourse[]> => {
    return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export const getCourseBySlug = (slug: string): Promise<ICourse> => {
    return fetch(baseUrl + '?slug=' + slug)
        .then(response => {
            return handleResponse(response).then((courses: ICourse[]) => courses[0] || []);
        })
        .catch(handleError);
}

export const saveCourse = (course: ICourse) => {
    return fetch(baseUrl + (course.id || ''), {
        method: course.id ? 'PUT' : 'POST',
        headers: { 'content-type': "application/json" },
        body: JSON.stringify({
            ...course,
            authorId: _.isString(course.authorId) ? parseInt(course.authorId, 10) : course.authorId,
            slug: course.title.trim().split(' ').join('-')
        })
    }).then(handleResponse).catch(handleError)
}

export const deleteCourse = (courseId: number) => {
    return fetch(baseUrl + courseId, {
        method: 'DELETE'
    }).then(handleResponse).catch(handleError)
}