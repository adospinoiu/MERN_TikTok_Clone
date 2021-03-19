import React from 'react';
import "./VideoFooter.css";
import MusicNoteIcon from '@material-ui/icons/MusicNote';

function VideoFooter() {
    return (
        <div className="videoFooter">
            <div className="vidoeFooter_text">
                <h3>@adospinoiu</h3>
                <p>This is some description</p>
                <div className="videoFooter__ticker">
                    <MusicNoteIcon
                    className="videoFooter__icon" />
                </div>
            </div>
        </div>
    )
}

export default VideoFooter
