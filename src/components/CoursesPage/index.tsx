import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import * as courseActions from '../../actions/courseActions';
import { labelStrings } from '../../constents/clientStrings';
import { ICourse } from '../../model/course';
import courseStore from '../../stores/courseStore';
import CoursesList from './CoursesList';

interface Props {
}

const CoursesPage = (props: Props) => {
    const [courses, setCourses] = React.useState<ICourse[]>(courseStore.getCourseStore());

    React.useEffect(() => {
        courseStore.addChangeListener(onChange);
        if (courseStore.getCourseStore().length === 0) {
            courseActions.loadCourses();
        }
        return () => courseStore.removeChangeListener(onChange);
    }, []);

    function onChange() {
        setCourses(courseStore.getCourseStore());
    }

    const DeleteHandler = (courseId: number) => {
        courseActions.deleteCourse(courseId).then(() => {
            toast.warn('You just delete a course!');
        });
    }

    return (
        <>
            <h2>{labelStrings.courses}</h2>
            <Link to='/update-course'>
                <button className='btn btn-success'>{labelStrings.addCourse}</button>
            </Link>
            <CoursesList courses={courses} DeleteCourse={DeleteHandler} />
        </>
    );
};

export default CoursesPage;
