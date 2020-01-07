import { EventEmitter } from 'events';

import { actionTypes } from '../actions/actionTypes';
import dispatcher from '../dispatcher/appDispatcher';
import { ICourse } from '../model/course';
import { ICourseAction } from '../model/courseAction';

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
}

const courseStore = new CourseStore();


dispatcher.register((action: ICourseAction) => {
    switch (action.actionTypes) {
        case actionTypes.CREATE_COURSE:
            courseStore.store.push(action.course);
            courseStore.emitChange();
            break;
        default:
        // nothing to do here
    }
});