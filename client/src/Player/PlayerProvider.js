import React, { useCallback, useState } from 'react';

import PlayerContext from "./PlayerContext";
import Player from "./Player";

const initialState = {
    visible: false
};

const PlayerProvider = ({ children }) => {
    const [state, setState] = useState(initialState);

    const showPlayer = useCallback(() => {
        setState({visible: true});
    },[setState]);

    const hidePlayer = useCallback(() => {
        setState({visible: false});
    }, [setState]);

    const { visible } = state;

    return(
        <PlayerContext.Provider value={{ showPlayer, hidePlayer }}>
            {children}
            {visible && (
                <Player/>
            )}
        </PlayerContext.Provider>
    );

};

export default PlayerProvider;
