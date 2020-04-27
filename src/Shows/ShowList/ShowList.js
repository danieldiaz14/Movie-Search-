import React from 'react';
import ShowItem from './ShowItem';
//<ShowList term={this.state.term}onShowSelect={this.onShowSelect} shows={this.state.shows} selected={this.state.selectedShow}/>
const ShowList = ({ shows, placeHolder, onShowSelect }) => {
    const handleShowSelect = showId => onShowSelect(showId);

    const baseImgURL = 'https://image.tmdb.org/t/p/w500';
    const renderShowList = shows.map(show => {
        const img = `${baseImgURL}${show.poster_path}` ?? placeHolder;
        return (
            <ShowItem key={show.id} show={show} image={img} onShowSelect={handleShowSelect}/>
        )
    })
    return (
        <div className="container">
            <div className="shows row">
                {renderShowList}
            </div>
        </div>
    )
}

export default ShowList;