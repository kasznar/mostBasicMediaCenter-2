const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

function ListItem(title, absPath, itemType) {
    this.title = title;
    this.absPath = absPath;
    this.itemType = itemType;
}

function listDirectory(directoryPath) {
    const fs = require('fs');

    listOfStuff = [];

    var path = require('path');
    //Return the directories:
    var parentPath = path.dirname(directoryPath);

    listOfStuff.push(new ListItem('BACK', parentPath, 'back'));

    fs.readdirSync(directoryPath).forEach(file => {
        var itemType = 'file';
        var itemPath = path.resolve(directoryPath + '/' + file);
        //skip hidden files
        if (file.charAt(0) != ".") {
            //check if directory
            if (fs.lstatSync(itemPath).isDirectory()) {
                itemType = 'folder';
            }
            listOfStuff.push(new ListItem(file, itemPath, itemType));
        }
    });

    return listOfStuff;
}


app.get('/list-movies', function (req, res) {
    const lol = listDirectory('./downloads')
    res.send(lol
    );
});
