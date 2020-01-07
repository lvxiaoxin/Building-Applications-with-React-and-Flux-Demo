import React from 'react';

import { labelStrings } from '../../../constents/clientStrings';
import { ICourse } from '../../../model/course';
import TextInput from '../../Common/TextInput';
import SelectInput from '../../Common/SelectInput';
import * as courseApi from "../../../api/courseApi";

interface Props {
}

const CourseForm = (props: Props) => {
    const [course, setCourse] = React.useState<ICourse>({
        id: NaN,
        slug: '',
        title: '',
        authorId: NaN,
        category: ''
    });

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        setCourse({
            ...course,
            [e.target.name]: e.target.value
        });
    }

    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        courseApi.saveCourse(course);
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <TextInput
                id='title'
                label={labelStrings.title}
                onChange={onChangeHandler}
                name='title'
                value={course.title}
            />

            <SelectInput
                id='author'
                label={labelStrings.author}
                onChange={onChangeHandler}
                name='authorId'
                value={course.authorId}
            />

            <TextInput
                id='category'
                label={labelStrings.category}
                onChange={onChangeHandler}
                name='category'
                value={course.category}
            />

            <button type='submit' value='Save' className='btn btn-primary'>{labelStrings.submit}</button>
        </form>
    );
};

export default CourseForm;
