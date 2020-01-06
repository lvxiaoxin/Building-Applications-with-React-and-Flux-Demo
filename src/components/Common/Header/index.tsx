import React from 'react';
import { NavLink } from 'react-router-dom';
import { labelStrings } from '../../../constents/clientStrings';

interface Props {
}

const Header = (props: Props) => {
    const activeStyle = { color: 'orange' };
    return (
        <nav>
            <NavLink activeStyle={activeStyle} exact to='/'>
                {labelStrings.home}
            </NavLink>
            {' ' + labelStrings.SeperateCharacter + ' '}
            <NavLink activeStyle={activeStyle} to='/courses'>
                {labelStrings.Courses}
            </NavLink>
            {' ' + labelStrings.SeperateCharacter + ' '}
            <NavLink activeStyle={activeStyle} to='/about'>
                {labelStrings.About}
            </NavLink>
        </nav>
    );
};

export default Header;
