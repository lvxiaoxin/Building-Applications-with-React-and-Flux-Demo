import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from '../HomePage/index';
import About from '../About/index';
import PageNotFound from '../PageNotFound/index';
import CoursesPage from '../CoursesPage';

interface Props {
}

const App = (props: Props) => {
    return (
        <div className='container-fluid'>
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/courses' exact component={CoursesPage} />
                <Route path='/about' exact component={About} />
                <Redirect from='/about-page' to='/about' />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    );
};

export default App;
