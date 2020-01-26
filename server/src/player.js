class Player {
    terminal;
    debug = false;
    mPlayerVolume = 69;

    constructor(debugMode = false) {
        this.debug = debugMode;
    }

    openVideo(videoPath) {
        if (this.debug) {
            console.log('start playing: ' + videoPath)
        } else {
            if (!this.terminal) {
                this.terminal = require('child_process').spawn('omxplayer', [videoPath]);
            } else {
                console.log("already opened");
            }
            
            this.terminal.on('exit', function (code) {
                console.log('child process exited with code ' + code);
                this.terminal = null;
            });
        }
    }

    seekForward() {
        if (this.debug) {
            console.log("seek forward");
        } else {
            // nem biztos hogy ez így működik a dupla \\ izével
            this.terminal.stdin.write("\\027[A");
        }
    }

    seekBackward() {
        if (this.debug) {
            console.log('seek backwards')
        } else {
            // nem biztos hogy ez így működik a dupla \\ izével
            this.terminal.stdin.write("\\027[B");
        }
    }

    volumeUp() {
        if (this.mPlayerVolume < 95) {
            this.mPlayerVolume += 5;
        } else {
            this.mPlayerVolume = 100;
        }

        if (this.debug) {
            console.log('volume up');
        } else {
            this.terminal.stdin.write('+');
        }
    }

    volumeDown() {
        if (this.mPlayerVolume > 5) {
            this.mPlayerVolume -= 5;
        } else {
            this.mPlayerVolume = 0;
        }

        if (this.debug) {
            console.log('volume down');
        } else {
            this.terminal.stdin.write('-');
        }
    }

    quitPlayer() {
        if (this.debug) {
            console.log('quit player');
        } else {
            this.terminal.stdin.write('q');
            this.terminal.stdin.end();
        }
    }

    pausePlayer() {
        if (this.debug) {
            console.log('pause player');
        } else {
            this.terminal.stdin.write('p');
        }
    }

}

module.exports = Player;
