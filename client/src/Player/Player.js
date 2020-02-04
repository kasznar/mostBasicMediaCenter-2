import React, {useCallback} from 'react';

import './Player.scss';
import axios from "axios";
import usePlayer from "./usePlayer";

const Player = () => {
    const { hidePlayer } = usePlayer();

    const callPause = useCallback(() => {
        axios.get('/api/pause/').then(() => {});
    }, []);

    const callStop = useCallback(() => {
        axios.get('/api/quit').then(() => {
            hidePlayer();
        });
    }, [hidePlayer]);

    const callVolumeUp = useCallback(() => {
        axios.get('/api/volume-up').then(() => {});
    }, []);

    const callVolumeDown = useCallback(() => {
        axios.get('/api/volume-down').then(() => {});
    }, []);

    const callSeekForward = useCallback(() => {
        axios.get('/api/seek-forward').then(() => {});
    }, []);

    const callSeekBackward = useCallback(() => {
        axios.get('/api/seek-backward').then(() => {});
    }, []);


    return (
        <div className="player">
            <button onClick={callPause}><span role="img" aria-label="noice">⏯</span>Play/Pause️</button>
            <button onClick={callStop}><span role="img" aria-label="noice">⏹</span>Stop️</button>
            <button onClick={callVolumeDown}><span role="img" aria-label="noice">🔈</span>-</button>
            <button onClick={callVolumeUp}><span role="img" aria-label="noice">🔊</span>+</button>
            <button onClick={callSeekBackward}><span role="img" aria-label="noice">⏪</span></button>
            <button onClick={callSeekForward}><span role="img" aria-label="noice">⏩</span></button>
        </div>
    );
};

export default Player;
