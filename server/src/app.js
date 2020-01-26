const express = require('express');
const app = express();
const port = 3000;

const Player = require('./player');
const Directory = require('./directory');


let player = new Player(true);
let directory = new Directory();


// SERVER

app.listen(port, () => console.log(`App listening on port ${port}!`));

app.get('/find/:id', function (req, res) {
    res.send(directory.findNode(req.params.id, directory.getTree()));
});

app.get('/list-movies', function (req, res) {
    res.send(directory.getTree());
});


// CONTROLS

app.get('/play/:id', function (req, res) {
    let obj = directory.findNode(req.params.id, directory.getTree());
    res.send(player.openVideo(obj.path));
});

app.get('/pause', function (req, res) {
    player.pausePlayer();
    res.send("paused");
});

app.get('/quit', function (req, res) {
    player.quitPlayer();
    res.send("quited");
});

app.get('/volume-up', function (req, res) {
    player.volumeUp();
    res.send("volume up");
});

app.get('/volume-down', function (req, res) {
    player.volumeDown();
    res.send("volume down");
});

app.get('/seek-forward', function (req, res) {
    player.seekForward();
    res.send("seek forward");
});

app.get('/seek-backward', function (req, res) {
    player.seekBackward();
    res.send("seek backward");
});
