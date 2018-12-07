import React from 'react';

const ShowList = (props) => {
    const baseImg = 'https://image.tmdb.org/t/p/w500'
    const shows = props.shows.map((show) => {
        return (
            <div key={show.id} className="col-md-3">
                <div className="well text-center">
                <img alt={show.overview} src={`${baseImg}${show.poster_path}`}/>
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