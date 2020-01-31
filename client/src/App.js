import React from 'react';
import logo from './logo.svg';
import './App.css';
import usePlayer from "./usePlayer";

function App() {
    const { dir, onBackClick, onOpenClick, onPlayClick } = usePlayer();

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
            </header>
            <div className="App-content">
                {dir.parentId && (
                    <span className="back" role="img" aria-label="noice" onClick={onBackClick}>👈</span>
                )}
                {dir.children.map(item => {
                    return (
                        <p key={item.id}>
                            {item.path} + {item.name}
                            {item.children ? (
                                <span onClick={onOpenClick(item)} role="img" aria-label="noice">📦</span>
                            ) : (
                                <span onClick={onPlayClick(item)} role="img" aria-label="noicer">👌🏼</span>
                            )}
                        </p>
                    )
                })}
            </div>
        </div>
    );
}

export default App;
