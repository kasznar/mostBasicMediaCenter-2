import React, {useCallback, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [tree, setTree] = useState({
    children: []
  });

  // const [prevTree, setPrevTree] = useState();
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios.get('/api/list-movies').then(response => {
      setTree(response.data);
    });
  }, []);

  const onOpenClick = useCallback((item) => (/* event */) =>{
    // setPrevTree(tree);
    console.log(history);
    let newHistory = [...history, tree]
    setHistory(newHistory);
    setTree(item);
    console.log(history);
  },[tree, history, setHistory]);

  const onBackClick = useCallback(() => {
    let newHistory = [...history].pop();
    setHistory(newHistory);
    setTree(history[history.length-1])
  }, [history,setHistory,setTree]);

  const onPlayClick = useCallback(()=>{
    // start
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-content">
        {history.length > 0 && (
            <span className="back" role="img" aria-label="noice" onClick={onBackClick}>👈</span>
        )}
        {tree.children.map(item => {
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
