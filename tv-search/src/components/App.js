import './main.css';
import React from 'react';
import Home from './Home';
import SearchBar from './SearchBar';
import ShowList from './ShowList';
import MovieDB from '../api/MovieDB';


class App extends React.Component {
    state = {
        shows: [],
        home: [],
        selectedShow: null
    };

    onSubmit = async (term) => {
        const response = await MovieDB.get('/search/tv',{
            params: {api_key:'b8ef17bd40019759c9b93654e682a1a0', language:'en-US', query: term, page:1}
        });
        this.setState({shows: response.data.results});
    };

    componentDidMount = async () => {
        const response = await MovieDB.get('/discover/tv', {
            params: {api_key:'b8ef17bd40019759c9b93654e682a1a0'}
        });
        this.setState({shows: response.data.results, home: response.data.results});
    };

    onHome = () => {
        this.setState({shows: this.state.home});
    };

    onShowSelect = (show) => {
        this.setState({selectedShow: show});
    };
    render() {
        console.log(this.state.selectedShow);
        return (
            <div>
                <Home onReturn={this.onHome}/>
                <SearchBar onSubmit={this.onSubmit}/>
                <ShowList onShowSelect={this.onShowSelect} shows={this.state.shows}/>
            </div>
        )
    }
}

export default App;