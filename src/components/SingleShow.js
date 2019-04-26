import React from 'react';

class SingleShow extends React.Component {

    render() {
        const {show, image, onShowSelect} = this.props;
        return (
            <div onClick={() => onShowSelect(show)} key={show.id} className="col-md-3">
                <div className="well text-center">
                    <img alt={show.overview} src={image}/>
                    <h5>{show.name}</h5>
                </div>
            </div>
        )
    }
}

export default SingleShow;
