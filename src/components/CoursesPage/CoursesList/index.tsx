import React from 'react';
import { ICourse } from '../../../model/course';
import { labelStrings } from '../../../constents/clientStrings';

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
                            <td>{course.title}</td>
                            <td>{course.authorId}</td>
                            <td>{course.category}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default CoursesList;
