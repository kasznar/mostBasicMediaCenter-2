import React from 'react';
import logo from './logo.svg';
import './App.css';

import PlayerProvider from "./Player/PlayerProvider";
import Directory from "./Directory/Directory";


function App() {
    return (
        <PlayerProvider>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>
                <Directory/>
            </div>
        </PlayerProvider>
    );
}

export default App;
