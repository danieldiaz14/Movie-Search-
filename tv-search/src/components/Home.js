import React from 'react';


class Home extends React.Component {
    goHome = (e) => {
        e.preventDefault();
        this.props.onReturn();
    }
    render() {
        return (
            <nav onClick={this.goHome} className="navbar navbar-default" style={{cursor: 'pointer'}}>
                <div className="container">
                    <div className="navbar-header">
                        <p className="navbar-brand">Home</p>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Home;