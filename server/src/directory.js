const crypto = require('crypto');

class Directory {
    tree;

    getTree() {
        return this.tree;
    }

    constructor() {
        this.tree = this.makeTree();
    }

    createId(path) {
        // "absolute" path will always result in the same hash
        return crypto.createHash('md5').update(path).digest('hex');
    }

    addId(obj) {
        obj['id'] = this.createId(obj.path);

        if (obj.children) {
            obj.children.forEach((element) => {
                this.addId(element);
            });
        }
    }

    addParent(obj, parentId = null) {
        if (parentId) {
            obj['parentId'] = parentId;
        }

        if (obj.children) {
            obj.children.forEach((element) => {
                this.addParent(element, obj.id);
            });
        }
    }

    makeTree() {
        const dirTree = require("directory-tree");
        // for testing: ../../../raspberry-docker/downloads/
        const tree = dirTree("./downloads");

        this.addId(tree);
        this.addParent(tree);

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
