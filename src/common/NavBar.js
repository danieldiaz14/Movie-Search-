import React from 'react';

import Button from './Button';

// Needs info of onLink. Where to navigate to.
const NavBar = props => {
    
    return (
        <nav className="navbar sticky-top navbar-dark bg-primary">
            <div className="container">
                <ul className="list-inline">
                    <Button buttonText="Home"/>
                    <Button buttonText="Previous"/>
                </ul>
            </div>
        </nav>
    )
};

export default NavBar;