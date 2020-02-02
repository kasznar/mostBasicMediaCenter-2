import { createContext } from 'react';

const PlayerContext = createContext({
    showPlayer: () => {},
    hidePlayer: () => {}
});

export default PlayerContext;
