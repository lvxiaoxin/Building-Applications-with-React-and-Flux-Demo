import React from 'react';

import { labelStrings } from '../../../constents/clientStrings';
import { ICourse } from '../../../model/course';
import TextInput from '../../Common/TextInput';
import SelectInput from '../../Common/SelectInput';

interface Props {
}

const CourseForm = (props: Props) => {
    const [course, setCourse] = React.useState<ICourse>({
        id: -1,
        slug: '',
        title: '',
        authorId: -1,
        category: ''
    });

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        setCourse({
            ...course,
            [e.target.name]: e.target.value
        });
    }

    return (
        <form>
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

        </form>
    );
};

export default CourseForm;
