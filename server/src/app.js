const express = require('express');
const app = express();
const port = 3001;

const Player = require('./player');
const Directory = require('./directory');


let player = new Player(true);
let directory = new Directory();


// SERVER

app.listen(port, () => console.log(`App listening on port ${port}!`));

app.get('/api/find/:id', function (req, res) {
    res.send(directory.searchTree(req.params.id));
});

app.get('/api/list-movies', function (req, res) {
    res.send(directory.getTree());
});


// CONTROLS

app.get('/api/play/:id', function (req, res) {
    let obj = directory.searchTree(req.params.id);
    res.send(player.openVideo(obj.path));
});

app.get('/api/pause', function (req, res) {
    player.pausePlayer();
    res.send("paused");
});

app.get('/api/quit', function (req, res) {
    player.quitPlayer();
    res.send("quited");
});

app.get('/api/volume-up', function (req, res) {
    player.volumeUp();
    res.send("volume up");
});

app.get('/api/volume-down', function (req, res) {
    player.volumeDown();
    res.send("volume down");
});

app.get('/api/seek-forward', function (req, res) {
    player.seekForward();
    res.send("seek forward");
});

app.get('/api/seek-backward', function (req, res) {
    player.seekBackward();
    res.send("seek backward");
});
