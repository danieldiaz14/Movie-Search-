import Img from './placeholder1.jpg';
import React from 'react';

const ShowDetail = ({info}) => {
    const baseImg = 'https://image.tmdb.org/t/p/w500';
    const img = info.poster_path != null ? `${baseImg}${info.poster_path}` : Img;
    const backup = 'information not provided';
    const genre = info.genres.length > 0 ? info.genres[0].name : backup;
    const director = info.created_by.length > 0 ? info.created_by[0].name : backup;
    return (
        <div className="jumbotron">
            <div className="row">
                <div className="col-md-4">
                    <img src={img} alt={info.name} className="thumbnail"/>
                </div>
                <div className="col-md-8">
                <h2>{info.name}</h2>
                <ul className="list-group">
                <li className="list-group-item"><strong>Genre:</strong> {genre}</li>
                <li className="list-group-item"><strong>Released:</strong> {info.first_air_date || backup}</li>
                <li className="list-group-item"><strong>Rated:</strong> {info.vote_average || backup}</li>
                <li className="list-group-item"><strong>Director:</strong> {director}</li>
                <li className="list-group-item"><strong>Seasons:</strong> {info.number_of_seasons || backup}</li>
                <li className="list-group-item"><strong>Last Air Date:</strong> {info.last_air_date || backup}</li>
                </ul>
                <h2>OverView</h2>
                {info.overview}
                </div>
            </div>
        </div>
    )
}

export default ShowDetail;