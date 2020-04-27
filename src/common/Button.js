import React from 'react';

const Button = ( { onLink, buttonText } ) => {

    const handleClick = () => onLink();

    return (
        <li className="list-inline-item">
            <p className="navbar-brand" onClick={ handleClick }>
                {buttonText}
            </p>
        </li>
    )
}

export default Button;