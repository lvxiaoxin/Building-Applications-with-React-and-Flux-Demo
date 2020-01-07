import React from 'react';

import { labelStrings } from '../../../constents/clientStrings';
import { ICourse } from '../../../model/course';
import SelectInput from '../../Common/SelectInput';
import TextInput from '../../Common/TextInput';

interface Props {
    course: ICourse;
    onChangeHandler: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
    onSubmitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
}

const CourseForm = (props: Props) => {
    return (
        <form onSubmit={props.onSubmitHandler}>
            <TextInput
                id='title'
                label={labelStrings.title}
                onChange={props.onChangeHandler}
                name='title'
                value={props.course.title}
            />

            <SelectInput
                id='author'
                label={labelStrings.author}
                onChange={props.onChangeHandler}
                name='authorId'
                value={props.course.authorId}
            />

            <TextInput
                id='category'
                label={labelStrings.category}
                onChange={props.onChangeHandler}
                name='category'
                value={props.course.category}
            />

            <button type='submit' value='Save' className='btn btn-primary'>{labelStrings.submit}</button>
        </form>
    );
};

export default CourseForm;
