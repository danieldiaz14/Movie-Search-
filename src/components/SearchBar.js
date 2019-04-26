import React from 'react';


class SearchBar extends React.Component {
    state = {
        term: '',
    };

    updateSearch = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    };
    
    focusOnSearch = () => {
        document.querySelector('#root').scrollIntoView({behavior: "smooth"})
    };

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h3 className="text-center">Search for any TV show!</h3>
                    <form className="searchForm" onSubmit={this.updateSearch}>
                        <input type="text" onClick={() => this.focusOnSearch()}value={this.state.term} onChange={e => this.setState({term: e.target.value})} className="form-control" placeholder="Search any tv show"></input>
                    </form>
                </div>
            </div>
        )
    }
}

export default SearchBar