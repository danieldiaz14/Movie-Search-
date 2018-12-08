import Img from './placeholder1.jpg';
import React from 'react';
const ShowList = (props) => {
    const baseImg = 'https://image.tmdb.org/t/p/w500'
    const shows = props.shows.map((show) => {
        const img = show.poster_path != null ? `${baseImg}${show.poster_path}` : Img;
        return (
            <div key={show.id} className="col-md-3">
                <div className="well text-center">
                <img alt={show.overview} src={img}/>
                <h5>{show.name}</h5>
                </div>
            </div>
        );
    });
    return (
        <div className="container">
            <div className="shows row">
                {shows}
            </div>
        </div>
    )
}

export default ShowList;