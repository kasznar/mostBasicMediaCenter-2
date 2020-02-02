import React from 'react';
import useDirectory from "./useDirectory";


const Directory = () => {
    const { dir, onBackClick, onOpenClick, onPlayClick } = useDirectory();

    return(
        <div className="App-content">
            {dir.parentId && (
                <span className="back" role="img" aria-label="noice" onClick={onBackClick}>👈</span>
            )}
            {dir.children.map(item => {
                return (
                    <p key={item.id}>
                        {item.name}
                        {item.children ? (
                            <span onClick={onOpenClick(item)} role="img" aria-label="noice">📦</span>
                        ) : (
                            <span onClick={onPlayClick(item)} role="img" aria-label="noicer">👌🏼</span>
                        )}
                    </p>
                )
            })}
        </div>
    );
};

export default Directory;
