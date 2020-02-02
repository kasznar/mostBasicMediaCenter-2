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
            <button onClick={callPause}>⏯Play/Pause️</button>
            <button onClick={callStop}>⏹Stop️</button>
            <button onClick={callVolumeDown}>🔈-</button>
            <button onClick={callVolumeUp}>🔊+</button>
            <button onClick={callSeekBackward}>⏪</button>
            <button onClick={callSeekForward}>⏩</button>

        </div>
    );
};

export default Player;
