import React from 'react';

import { labelStrings } from '../../constents/clientStrings';
import CourseForm from './CourseForm';

interface Props {
}

const UpdateCoursePage = (props: Props) => {
    return (
        <>
            <h2>{labelStrings.AddCourse}</h2>
            <CourseForm />
        </>
    );
};

export default UpdateCoursePage;
