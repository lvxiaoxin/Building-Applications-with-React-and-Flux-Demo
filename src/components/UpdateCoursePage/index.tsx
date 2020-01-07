import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { toast } from 'react-toastify';

import * as courseActions from '../../actions/courseActions';
import { labelStrings } from '../../constents/clientStrings';
import { ICourse } from '../../model/course';
import courseStore from '../../stores/courseStore';
import CourseForm from './CourseForm';

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
            />
        </>
    );
};

export default UpdateCoursePage;
