import './main.css';
import React from 'react';
import Home from './Home';
import SearchBar from './SearchBar';

class App extends React.Component {

    render() {
        return (
            <div>
                <Home/>
                <SearchBar/>
            </div>
        )
    }
}

export default App;