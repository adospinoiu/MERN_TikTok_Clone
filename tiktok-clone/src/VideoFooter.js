import React from 'react';
import "./VideoFooter.css";
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from "react-ticker";

function VideoFooter() {
    return (
        <div className="videoFooter">
            <div className="vidoeFooter_text">
                <h3>@adospinoiu</h3>
                <p>This is some description</p>
                <div className="videoFooter__ticker">
                    <MusicNoteIcon
                    className="videoFooter__icon" />

                    <Ticker mode="smooth">
                        {({ index }) => (
                            <>
                                <p>I am a song</p>
                            </>
                        )}
                    </Ticker>
                </div>
            </div>
        </div>
    )
}

export default VideoFooter
