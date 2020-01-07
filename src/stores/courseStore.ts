import { EventEmitter } from 'events';
import * as _ from 'lodash';

import { actionTypes } from '../actions/actionTypes';
import dispatcher from '../dispatcher/appDispatcher';
import { ICourse } from '../model/course';

const CHANGE_EVENT = 'change';

class CourseStore extends EventEmitter {

    public store: ICourse[] = [];

    public addChangeListener(callback: () => void) {
        this.on(CHANGE_EVENT, callback);
    }

    public removeChangeListener(callback: () => void) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    public emitChange() {
        this.emit(CHANGE_EVENT);
    }

    public getCourseStore(): ICourse[] {
        return this.store;
    }

    public getCourseStoreBySlug(slug: string): ICourse | undefined {
        return this.store.find((course: ICourse) => course.slug === slug);
    }
}

const courseStore = new CourseStore();


dispatcher.register((action: any) => {
    if (action.actionTypes) {
        switch (action.actionTypes) {
            case actionTypes.CREATE_COURSE:
                courseStore.store.push(action.course);
                courseStore.emitChange();
                break;
            case actionTypes.UPDATE_COURSE:
                courseStore.store = courseStore.store.map(course =>
                    course.id === action.course.id ? action.course : course
                );
                courseStore.emitChange();
                break;
            case actionTypes.DELETE_COURSE:
                const compareCourseId: number = _.isString(action.id) ? parseInt(action.id) : action.id;
                courseStore.store = courseStore.store.filter(course => course.id !== compareCourseId);
                courseStore.emitChange();
                break;
            case actionTypes.LOAD_COURSES:
                courseStore.store = action.courses;
                courseStore.emitChange();
                break;
            default:
            // nothing to do here
        }
    }
});

export default courseStore;