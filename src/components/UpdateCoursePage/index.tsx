import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { toast } from 'react-toastify';

import * as courseActions from '../../actions/courseActions';
import { labelStrings } from '../../constents/clientStrings';
import { ICourse } from '../../model/course';
import courseStore from '../../stores/courseStore';
import CourseForm from './CourseForm';
import { IError } from '../../model/error';

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
    const [courses, setCourses] = React.useState<ICourse[]>(courseStore.getCourseStore());
    const [errors, setErrors] = React.useState<IError[]>([]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        setCourse({
            ...course,
            [e.target.name]: e.target.value
        });
    }

    const isValidToUpdate = (): boolean => {
        let newError: IError[] = [];
        if (!course.title) {
            newError = newError.concat([{
                errorName: 'title',
                errorMessage: 'Title should not be empty.'
            }]);
        }
        if (!course.authorId) {
            newError = newError.concat([{
                errorName: 'author',
                errorMessage: 'Author should not be empty.'
            }]);
        }
        if (!course.category) {
            newError = newError.concat([{
                errorName: 'category',
                errorMessage: 'Category should not be empty.'
            }]);
        }
        setErrors(newError);
        return Object.keys(newError).length === 0;
    }

    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isValidToUpdate()) {
            courseActions.saveCourse(course).then(() => {
                toast.success('Course saved.');
                props.history.push('/courses');
            }, () => {
                toast.error('Something error happened while saving the course.');
            });
        }
    }

    React.useEffect(() => {
        courseStore.addChangeListener(onChange);
        const slug = props.match.params.slug;
        if (courses.length === 0) {
            courseActions.loadCourses();
        } else if (slug) {
            debugger;
            const newCourse = courseStore.getCourseStoreBySlug(slug);
            if (newCourse) {
                setCourse(newCourse);
            }
        }
    }, [props.match.params.slug, courses.length]);

    function onChange() {
        setCourses(courseStore.getCourseStore());
    }

    return (
        <>
            <h2>{labelStrings.addCourse}</h2>
            <CourseForm
                course={course}
                onChangeHandler={onChangeHandler}
                onSubmitHandler={onSubmitHandler}
                errors={errors}
            />
        </>
    );
};

export default UpdateCoursePage;
