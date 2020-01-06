import React, { useState } from 'react';
import { ICourse } from '../../model/course';
import CoursesList from './CoursesList';

interface Props {
}

const CoursesPage = (props: Props) => {
    const [courses, setCourses] = useState<ICourse[]>([
        {
            id: 1,
            title: "Securing React Apps with Auth0",
            slug: "react-auth0-authentication-security",
            authorId: 1,
            category: "JavaScript"
        },
        {
            id: 2,
            title: "React: The Big Picture",
            slug: "react-big-picture",
            authorId: 1,
            category: "JavaScript"
        },
        {
            id: 3,
            title: "Creating Reusable React Components",
            slug: "react-creating-reusable-components",
            authorId: 1,
            category: "JavaScript"
        }
    ]);

    return (
        <>
            <h2>Courses</h2>
            <CoursesList courses={courses} />
        </>
    );
};

export default CoursesPage;
