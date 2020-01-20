const express = require('express');
const app = express();
const port = 3000;


// example code

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));





// My code :)

function createId() {
    let idList = [];
    let newId;

    do {
        newId = Math.round(Math.random() * 10000);
    }
    while (idList.includes(newId));

    return newId;
}

function addId(obj) {
    obj['id'] = createId();

    if (obj.children) {
        obj.children.forEach((element) => {
            addId(element);
        });
    }
}

function getTree() {
    const dirTree = require("directory-tree");
    const tree = dirTree("./downloads");

    addId(tree);

    return tree;
}





function findItem(obj, id) {
    if (obj.id == id) {
        return obj;
    } else if (obj.children) {
        obj.children.forEach((element) => {
            findItem(element, id)
        })
    }

}

const tree = getTree();

app.get('/find/:id', function (req, res) {
    console.log(req.params.id);
    const igen = findItem(tree, req.params.id);
    res.send(igen);
});

app.get('/list-movies', function (req, res) {
    res.send(tree);
});


