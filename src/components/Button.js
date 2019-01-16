import React from 'react';


class Button extends React.Component {
    render() {
        return (
                <li className="list-inline-item">
                    <p className="navbar-brand" onClick={() => this.props.onLink()}>{this.props.text}</p>
                </li>
        )
    }
}

export default Button;