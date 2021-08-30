/**
 * Definition for a binary tree node.
 */
 
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 const serialize = function(root) {
    const arr = [];
    inOrder(root, 0, arr);
    arr.map(el => {
        if (!el) {
            return null;
        }
        return el;
    });
    return JSON.stringify(arr);
};

const inOrder = (root, i, arr) => {
    if (!root) {
        return;
    }
    arr[i] = root.val
    inOrder(root.left, 2*i + 1, arr);
    inOrder(root.right, 2*i + 2, arr);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = function(data) {
    const values = JSON.parse(data);
    return createTree(values, 0);
};

const createTree = (data, i) => {
    if (data[i] === null || data[i] === undefined) {
        return;
    }
    return new TreeNode(data[i], createTree(data, 2*i + 1), createTree(data, 2*i + 2));
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

describe("serialize", () => {
    it("[1,7,0,7,-8,null,null]", () => {
        const root = new TreeNode(1, 
            new TreeNode(7, 
                new TreeNode(7), new TreeNode(-8)), 
            new TreeNode(0));
        expect(serialize(root)).toBe("[1,7,0,7,-8]");    
    });
    it("[1,7,0,7,-8,null,null]", () => {
        const root = new TreeNode(1, 
            new TreeNode(7, 
                new TreeNode(7), new TreeNode(-8)), 
            new TreeNode(0));

        expect(deserialize("[1,7,0,7,-8,null,null]")).toEqual(root);    
    });
    it("[]", () => {
        const root = new TreeNode();
        expect(serialize(root)).toBe("[0]");
        expect(deserialize("[0]")).toBe(root);    
    });
});