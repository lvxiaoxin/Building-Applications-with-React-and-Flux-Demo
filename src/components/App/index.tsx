import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from '../HomePage';
import About from '../About';
import PageNotFound from '../PageNotFound';
import CoursesPage from '../CoursesPage';
import Header from '../Common/Header';
import UpdateCoursePage from '../UpdateCoursePage/index';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
                <Route path='/update-course' exact component={UpdateCoursePage} />
                <Redirect from='/about-page' to='/about' />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    );
};

export default App;
