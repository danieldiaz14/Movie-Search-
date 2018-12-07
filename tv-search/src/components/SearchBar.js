import React from 'react';


class SearchBar extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h3 className="text-center">Search for any TV show!</h3>
                    <form className="searchForm">
                        <input type="text" className="form-control" placeholder="Search any tv show"></input>
                    </form>
                </div>
            </div>
        )
    }
}

export default SearchBar