import React, { Component } from 'react';
import './SongTile.css';

class SongTile extends Component {
    getColor(uniques) {
        const red = "#FF0000";
        const yellow = "#FFFF00";
        const green = "#00FF00";

        if (uniques >= 100) {
            return green;
        } else if (uniques >= 50 && uniques < 100) {
            return yellow;
        } else {
            return red;
        }
    }

    render() {
        const { SongData } = this.props;
        const boxStyle = {
            backgroundColor: this.getColor(SongData.uniques)
        };

        return (
            <div className="SongTile" style={boxStyle} onClick={this.props.onClick}>
                <div>{SongData.year}</div>
            </div>
        )
    }
}

export default SongTile;