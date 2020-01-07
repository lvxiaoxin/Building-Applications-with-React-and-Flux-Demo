import { ICourse } from './course';

export interface ICourseAction {
    actionTypes: string;
    course: ICourse;
}