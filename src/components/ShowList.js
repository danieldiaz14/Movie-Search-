import Img from './placeholder1.jpg';
import React from 'react';
import SingleShow from './SingleShow';
import ShowDetail from './ShowDetail';

const ShowList = ({shows, onShowSelect, selected, term}) => {
    const baseImg = 'https://image.tmdb.org/t/p/w500';
    const renderedShow = shows.map((show) => {
        const img = show.poster_path != null ? `${baseImg}${show.poster_path}` : Img;
        return (
            <SingleShow key={show.id} onShowSelect={onShowSelect} show={show} image={img}/>
        );
    });
    if (!selected) {
        if (shows.length < 1) {
            return (
                <div className="container">
                    <h1>No results found</h1>
                </div>
            )
        }
        return (
            <div className="container">
                <div className="shows row">
                    {renderedShow}
                </div>
            </div>
        )
    } else {
        return (
            <div className="container">
                <div className="show well">
                <ShowDetail info={selected}/>
                </div>
            </div>
        )
    }
}

export default ShowList;