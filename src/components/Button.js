import React from 'react';


class Button extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default" >
                <div className="container">
                    <p onClick={() => this.props.onLink()} style={{cursor: 'pointer'}}className="navbar-brand">{this.props.text}</p>
                </div>
            </nav>
        )
    }
}

export default Button;