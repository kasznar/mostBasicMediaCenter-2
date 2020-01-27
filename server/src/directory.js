class Directory {
    tree;
    idList = [];

    getTree() {
        return this.tree;
    }

    constructor() {
        this.tree = this.makeTree();
    }

    createId() {
        let newId;

        do {
            newId = Math.round(Math.random() * 10000);
        }
        while (this.idList.includes(newId));

        this.idList.push(newId);

        return newId;
    }

    addId(obj) {
        obj['id'] = this.createId();

        if (obj.children) {
            obj.children.forEach((element) => {
                this.addId(element);
            });
        }
    }

    makeTree() {
        const dirTree = require("directory-tree");
        const tree = dirTree("./downloads");

        this.addId(tree);

        return tree;
    }

    searchTree(id) {
        return this.findNode(id, this.tree);
    }

    findNode(id, currentNode) {
        let i,
            currentChild,
            result;

        if (id == currentNode.id) {
            return currentNode;
        } else {
            if (currentNode.children) {
                for (i = 0; i < currentNode.children.length; i += 1) {
                    currentChild = currentNode.children[i];

                    result = this.findNode(id, currentChild);

                    if (result !== false) {
                        return result;
                    }
                }
            }

            return false;
        }
    }

}

module.exports = Directory;
