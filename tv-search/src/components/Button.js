import React from 'react';


class Button extends React.Component {
    render() {
        return (
            <nav onClick={() => this.props.onLink()} className="navbar navbar-default" style={{cursor: 'pointer'}}>
                <div className="container">
                    <p className="navbar-brand">{this.props.text}</p>
                </div>
            </nav>
        )
    }
}

export default Button;