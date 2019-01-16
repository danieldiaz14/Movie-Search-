import './main.css';
import React from 'react';
import Button from './Button';
import SearchBar from './SearchBar';
import ShowList from './ShowList';
import MovieDB from '../api/MovieDB';


class App extends React.Component {
    state = {
        shows: [],
        home: [],
        previousSearch: [],
        selectedShow: null,
    };

    onSubmit = async (term) => {
        const response = await MovieDB.get('/search/tv',{
            params: {api_key:'b8ef17bd40019759c9b93654e682a1a0', language:'en-US', query: term, page:1}
        });
        this.setState({shows: response.data.results, previousSearch: response.data.results, selectedShow: null});
    };

    componentDidMount = async () => {
        const response = await MovieDB.get('/discover/tv', {
            params: {api_key:'b8ef17bd40019759c9b93654e682a1a0'}
        });
        console.log(response);
        this.setState({shows: response.data.results, home:response.data.results, previousSearch: response.data.results});
    };

    onHome = () => {
        this.setState({shows: this.state.home, selectedShow: null, term: 'Popular' });
    };

    onShowSelect = async (show) => {
        const response = await MovieDB.get(`/tv/${show.id}`, {
            params: {api_key: 'b8ef17bd40019759c9b93654e682a1a0'}
        });
        this.setState({selectedShow: response.data});
    };

    onPrevious = () => {
        this.setState({shows: this.state.previousSearch, selectedShow: null,})
    };

    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-primary">
                    <div className="container">
                        <ul className="list-inline">
                            <Button onLink={this.onHome} text="Home"/>
                            <Button onLink={this.onPrevious} text="Previous"/>
                        </ul>
                    </div>
                </nav>
                <SearchBar onSubmit={this.onSubmit}/>
                <ShowList term={this.state.term}onShowSelect={this.onShowSelect} shows={this.state.shows} selected={this.state.selectedShow}/>
            </div>
        )
    }
}

export default App;