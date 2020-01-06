import React from 'react';
import { Link } from 'react-router-dom';

import * as coursesApi from '../../api/courseApi';
import { labelStrings } from '../../constents/clientStrings';
import { ICourse } from '../../model/course';
import CoursesList from './CoursesList';

interface Props {
}

const CoursesPage = (props: Props) => {
    const [courses, setCourses] = React.useState<ICourse[]>([]);

    React.useEffect(() => {
        coursesApi.getCourse().then((newCourses: ICourse[]) => setCourses(newCourses));
    }, [])

    return (
        <>
            <h2>{labelStrings.Courses}</h2>
            <Link to='/update-course'>
                <button className='btn btn-success'>{labelStrings.AddCourse}</button>
            </Link>
            <CoursesList courses={courses} />
        </>
    );
};

export default CoursesPage;
