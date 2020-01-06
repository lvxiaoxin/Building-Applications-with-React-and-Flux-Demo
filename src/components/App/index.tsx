import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from '../HomePage';
import About from '../About';
import PageNotFound from '../PageNotFound';
import CoursesPage from '../CoursesPage';
import Header from '../Common/Header';
import UpdateCoursePage from '../UpdateCoursePage/index';

interface Props {
}

const App = (props: Props) => {
    return (
        <div className='container-fluid'>
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
