import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
}

const HomePage = (props: Props) => {
    return (
        <div className='jumbotron'>
            <h1>Homepage</h1>
            <p>This is a demo home page for react and flux.</p>
            <Link to='/about' className='btn btn-primary'>
                About
            </Link>
        </div>
    );
};

export default HomePage;
