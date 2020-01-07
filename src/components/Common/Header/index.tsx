import React from 'react';
import { NavLink } from 'react-router-dom';

import { labelStrings } from '../../../constents/clientStrings';

interface Props {
}

const Header = (props: Props) => {
    const activeStyle = { color: 'orange' };
    return (
        <nav className='navbar navbar-light bg-light'>
            <NavLink activeStyle={activeStyle} exact to='/'>
                <h3>{labelStrings.home}</h3>
            </NavLink>
            {' ' + labelStrings.seperateCharacter + ' '}
            <NavLink activeStyle={activeStyle} to='/courses'>
                <h2>{labelStrings.courses}</h2>
            </NavLink>
            {' ' + labelStrings.seperateCharacter + ' '}
            <NavLink activeStyle={activeStyle} to='/about'>
                <h2>{labelStrings.about}</h2>
            </NavLink>
        </nav>
    );
};

export default Header;
