import Img from './placeholder1.jpg';
import React from 'react';
import SingleShow from './SingleShow';

const ShowList = ({shows, onShowSelect}) => {
    const baseImg = 'https://image.tmdb.org/t/p/w500';
    const renderedShow = shows.map((show) => {
        const img = show.poster_path != null ? `${baseImg}${show.poster_path}` : Img;
        return (
            <SingleShow key={show.id} onShowSelect={onShowSelect} show={show} image={img}/>
        );
    });
    return (
        <div className="container">
            <div className="shows row">
                {renderedShow}
            </div>
        </div>
    )
}

export default ShowList;