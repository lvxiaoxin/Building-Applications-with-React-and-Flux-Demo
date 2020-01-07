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
            {' ' + labelStrings.seperateCharacter + ' '}
            <NavLink activeStyle={activeStyle} to='/courses'>
                {labelStrings.courses}
            </NavLink>
            {' ' + labelStrings.seperateCharacter + ' '}
            <NavLink activeStyle={activeStyle} to='/about'>
                {labelStrings.about}
            </NavLink>
        </nav>
    );
};

export default Header;
