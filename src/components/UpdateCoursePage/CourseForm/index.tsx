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
    const [titleErrorMessage, setTitleErrorMessage] = React.useState<string>('');
    const [authorErrorMessage, setAuthorErrorMessage] = React.useState<string>('');
    const [categoryErrorMessage, setCategoryErrorMessage] = React.useState<string>('');

    React.useEffect(() => {
        const titleError = props.errors.find((error: IError) => error.errorName === 'title')
        const authorError = props.errors.find((error: IError) => error.errorName === 'author')
        const categoryError = props.errors.find((error: IError) => error.errorName === 'category')

        titleError ? setTitleErrorMessage(titleError.errorMessage) : setTitleErrorMessage('');
        authorError ? setAuthorErrorMessage(authorError.errorMessage) : setAuthorErrorMessage('');
        categoryError ? setCategoryErrorMessage(categoryError.errorMessage) : setCategoryErrorMessage('');
    }, [props.errors]);


    return (
        <form onSubmit={props.onSubmitHandler}>
            <TextInput
                id='title'
                label={labelStrings.title}
                onChange={props.onChangeHandler}
                name='title'
                value={props.course.title}
            />
            {titleErrorMessage && (
                <div className='alert alert-danger'>{titleErrorMessage}</div>
            )}

            <SelectInput
                id='author'
                label={labelStrings.author}
                onChange={props.onChangeHandler}
                name='authorId'
                value={props.course.authorId}
            />
            {authorErrorMessage && (
                <div className='alert alert-danger'>{authorErrorMessage}</div>
            )}

            <TextInput
                id='category'
                label={labelStrings.category}
                onChange={props.onChangeHandler}
                name='category'
                value={props.course.category}
            />
            {categoryErrorMessage && (
                <div className='alert alert-danger'>{categoryErrorMessage}</div>
            )}

            <button type='submit' value='Save' className='btn btn-primary'>{labelStrings.submit}</button>
        </form>
    );
};

export default CourseForm;
