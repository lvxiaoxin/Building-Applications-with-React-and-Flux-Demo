import React from 'react';
import { toast } from 'react-toastify';

import * as courseApi from '../../api/courseApi';
import { labelStrings } from '../../constents/clientStrings';
import { ICourse } from '../../model/course';
import CourseForm from './CourseForm';
import { RouteComponentProps } from 'react-router-dom';
import * as courseActions from "../../actions/courseActions";

interface IMatchParams {
    slug: string;
}
interface Props extends RouteComponentProps<IMatchParams> {
}

const UpdateCoursePage = (props: Props) => {
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
        courseActions.saveCourse(course).then(() => {
            toast.success('Course saved.');
            props.history.push('/courses');
        }, () => {
            toast.error('Something error happened while saving the course.');
        });
    }

    React.useEffect(() => {
        const slug = props.match.params.slug;
        if (slug) {
            courseApi.getCourseBySlug(slug).then((result: ICourse) => setCourse(result));
        }
    }, [props.match.params.slug])

    return (
        <>
            <h2>{labelStrings.addCourse}</h2>
            <CourseForm
                course={course}
                onChangeHandler={onChangeHandler}
                onSubmitHandler={onSubmitHandler}
            />
        </>
    );
};

export default UpdateCoursePage;
