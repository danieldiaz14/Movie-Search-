import './main.css';
import React from 'react';
import Home from './Home';
import SearchBar from './SearchBar';
import ShowList from './ShowList';
import MovieDB from '../api/movieDB';


class App extends React.Component {
    state = {
        shows: []
    };

    onSubmit = async (term) => {
        const response = await MovieDB.get('/search/tv',{
            params: {api_key:'b8ef17bd40019759c9b93654e682a1a0', language:'en-US', query: term, page:1}
        });
        console.log(response.data.results);
        this.setState({shows: response.data.results});
    };

    componentDidMount = async () => {
        const response = await MovieDB.get('/discover/tv', {
            params: {api_key:'b8ef17bd40019759c9b93654e682a1a0'}
        });
        console.log(response.data.results);
        this.setState({shows: response.data.results});
    }
    render() {
        return (
            <div>
                <Home/>
                <SearchBar onSubmit={this.onSubmit}/>
                <ShowList shows={this.state.shows}/>
            </div>
        )
    }
}

export default App;