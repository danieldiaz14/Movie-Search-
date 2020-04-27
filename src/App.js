import './styles/main.css';
import React from 'react';

import { discoverShows, searchShows, getShow } from './api/MovieDB';

import { getCurrentCollection } from './Utils';

import { NavBar, SearchBar } from './common';

import ShowContainer from './Shows';

class App extends React.Component {
    state = {
        historyQueue: [],
    };

     componentDidMount = async () => {
        const response = await discoverShows();
        const { results } = response.data;
        const stateObject = {
            shows: results,
            searchTerm: "",
        };
        this.setState({
            historyQueue: [stateObject],
            defaultShows: results
        });
    };

    // onHome = () => {
    //     document.querySelector('#root').scrollIntoView({ behavior: "smooth" });
    //     this.setState({
    //         previousSearch: this.state.shows,
    //         shows: this.state.home,
    //         selectedShow: null
    //     });
    // };

    // onShowSelect = async (show) => {
    //     const response = await getShow(show.id);
    //     this.setState({
    //         previousSearch: this.state.shows,
    //         selectedShow: response.data
    //     });
    //     document.querySelector('div.row').scrollIntoView({behavior: "smooth"});
    // };

    render() {
        return (
            <div>
                <NavBar/>
                <SearchBar onSubmit={this.onSubmit}/>
                <ShowContainer showList={getCurrentCollection(this.state)} getShow={getShow} />
            </div>
        )
    }
}

export default App;