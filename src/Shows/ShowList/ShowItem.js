import React from 'react';

const ShowItem = ({ show, image, onShowSelect }) => {
    const handleClick = showId => onShowSelect(showId);
    return (
        <div onClick={() => handleClick(show.id)} className="col-md-3">
            <div className="well text-center">
                <img alt={show.overview} src={image}/>
                <h5>{show.name}</h5>
            </div>
        </div>
    )
}

export default ShowItem;
