import React from 'react';
import { Link } from 'react-router-dom';

import * as coursesApi from '../../api/courseApi';
import { labelStrings } from '../../constents/clientStrings';
import { ICourse } from '../../model/course';
import CoursesList from './CoursesList';
import { toast } from 'react-toastify';

interface Props {
}

const CoursesPage = (props: Props) => {
    const [courses, setCourses] = React.useState<ICourse[]>([]);

    React.useEffect(() => {
        coursesApi.getCourse().then((newCourses: ICourse[]) => setCourses(newCourses));
    }, []);

    const DeleteHandler = (courseId: number) => {
        coursesApi.deleteCourse(courseId).then(() => {
            toast.warn('You just delete a course!');
            coursesApi.getCourse().then((newCourses: ICourse[]) => setCourses(newCourses));
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
