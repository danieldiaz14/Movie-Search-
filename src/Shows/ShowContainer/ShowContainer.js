import placeHolderImg from './placeholder.jpg';
import React from 'react';

import ShowList from '../ShowList';
import ShowDetail from '../SingleShow';

// Add ability to go back. Add similar shows under show details.
// Allow similar shows to be clickable.

class ShowContainer extends React.Component {
    state = {
        showSelected: null,
    };

    showSelected = async (showId) => {
        const { getShow } = this.props;
        const selectedShow = await getShow(showId);
        console.log(selectedShow.data);
        this.setState({
            showSelected: selectedShow.data
        });
    }

    renderContent = () => {
        const { showList } = this.props;
        const { showSelected } = this.state;

        if (!showSelected) {
            if (showList) {
                return (
                <ShowList shows={showList} placeholder={placeHolderImg} onShowSelect={this.showSelected}/>
                )
            }
        } else {
            return (
                <div className="show well">
                    <ShowDetail info={showSelected} Img={placeHolderImg} />
                </div>
            )
        }
    }

    render() {
        return (
            <div className="container">
                { this.renderContent() }
            </div>
        )
    }
};

export default ShowContainer;