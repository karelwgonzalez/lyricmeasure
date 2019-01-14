import React, { Component } from 'react';
import './SongInfo.css';

class SongInfo extends Component {
    render() {
        const { SongData } = this.props;
        return (
            <div className="SongInfo">
                <div>Year: {SongData.year}</div>
                <div>Artist: {SongData.artist}</div>
                <div>Title: {SongData.title}</div>
                <div>Unique Words: {SongData.uniques}</div>
            </div>
        )
    }
}

export default SongInfo;