import React from 'react';
import { Link } from 'react-router-dom';

import { labelStrings } from '../../../constents/clientStrings';
import { ICourse } from '../../../model/course';

interface Props {
    courses: ICourse[]
}

const CoursesList = (props: Props) => {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>{labelStrings.title}</th>
                    <th>{labelStrings.authorId}</th>
                    <th>{labelStrings.category}</th>
                </tr>
            </thead>
            <tbody>
                {props.courses.map((course: ICourse) => {
                    return (
                        <tr key={course.id}>
                            <td>
                                <Link to={'/update-course/' + course.slug}>{course.title}</Link>
                            </td>
                            <td>{course.authorId}</td>
                            <td>{course.category}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table >
    );
};

export default CoursesList;
