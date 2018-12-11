import Img from './placeholder1.jpg';
import React from 'react';

const ShowDetail = ({info}) => {
    const baseImg = 'https://image.tmdb.org/t/p/w500';
    const img = info.poster_path != null ? `${baseImg}${info.poster_path}` : Img;
    return (
        <div>
            <div className="row">
                <div className="col-md-4">
                    <img src={img} className="thumbnail"/>
                </div>
                <div className="col-md-8">
                <h2>{info.name}</h2>
                <ul className="list-group">

                </ul>
            </div>
            </div>
            <div className="row">
                <div className="well">
                    <h3>OverView</h3>
                    {info.overview}
                </div>
            </div>
        </div>
    )
}

export default ShowDetail;