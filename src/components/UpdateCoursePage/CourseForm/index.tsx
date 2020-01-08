import React from 'react';

import { labelStrings } from '../../../constents/clientStrings';
import { ICourse } from '../../../model/course';
import SelectInput from '../../Common/SelectInput';
import TextInput from '../../Common/TextInput';
import { IError } from '../../../model/error';

interface Props {
    course: ICourse;
    onChangeHandler: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void;
    onSubmitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
    errors: IError[]
}

const CourseForm = (props: Props) => {
    let titleError: string = '';
    let authorError: string = '';
    let categoryError: string = '';

    props.errors.forEach((error: IError, index: number) => {
        if (error.errorName === 'title') {
            titleError = error.errorMessage;
        } else if (error.errorName === 'author') {
            authorError = error.errorMessage;
        } else if (error.errorName === 'category') {
            categoryError = error.errorMessage;
        } else {
            console.log('No error for updating course.');
        }
    })

    return (
        <form onSubmit={props.onSubmitHandler}>
            <TextInput
                id='title'
                label={labelStrings.title}
                onChange={props.onChangeHandler}
                name='title'
                value={props.course.title}
            />
            {titleError && (
                <div className='alert alert-danger'>{titleError}</div>
            )}

            <SelectInput
                id='author'
                label={labelStrings.author}
                onChange={props.onChangeHandler}
                name='authorId'
                value={props.course.authorId}
            />
            {authorError && (
                <div className='alert alert-danger'>{authorError}</div>
            )}

            <TextInput
                id='category'
                label={labelStrings.category}
                onChange={props.onChangeHandler}
                name='category'
                value={props.course.category}
            />
            {categoryError && (
                <div className='alert alert-danger'>{categoryError}</div>
            )}

            <button type='submit' value='Save' className='btn btn-primary'>{labelStrings.submit}</button>
        </form>
    );
};

export default CourseForm;
