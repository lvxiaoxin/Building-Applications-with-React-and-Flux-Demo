import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import About from '../About';
import Header from '../Common/Header';
import CoursesPage from '../CoursesPage';
import HomePage from '../HomePage';
import PageNotFound from '../PageNotFound';
import UpdateCoursePage from '../UpdateCoursePage';

interface Props {
}

const App = (props: Props) => {
    return (
        <div className='container'>
            <ToastContainer autoClose={3000} />
            <Header />
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/courses' exact component={CoursesPage} />
                <Route path='/about' exact component={About} />
                <Route path='/update-course/:slug' component={UpdateCoursePage} />
                <Route path='/update-course' exact component={UpdateCoursePage} />
                <Redirect from='/about-page' to='/about' />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    );
};

export default App;
