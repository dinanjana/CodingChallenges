/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

const largestValues = root => {
    const depth = getDepth(root);
    let i = 0;
    const res = [];
    while(i < depth) {
        const nodes = getAllNodesOfGivenDepth(root, i);
        let maxNode = nodes[0];
        for(let j = 1; j < nodes.length; j++) {
            if (nodes[j] && maxNode.val < nodes[j].val) {
                maxNode = nodes[j];
            }
        }
        res.push(maxNode.val);
        i++;
    }
    return res;
};

const getDepth = (root, i = 0) => {
    if (root === null) {
        return i;
    }
    const left = getDepth(root.left, i + 1);
    const right = getDepth(root.right, i + 1);
    return left > right ? left : right;
};

const getAllNodesOfGivenDepth = (root, depth, i = 0, nodes = []) => {
    if(root === null) {
        return;
    }
    if(i >= depth) {
        nodes.push(root);
        return nodes;
    }
    getAllNodesOfGivenDepth(root.left, depth, i + 1, nodes);
    getAllNodesOfGivenDepth(root.right, depth, i + 1, nodes);
    return nodes;
}

describe("largestValues", () => {
    it("[1,3,2,5,3,null,9]", () => {
        const root = new TreeNode(1 , 
            new TreeNode(3, 
                new TreeNode(5), new TreeNode(3)), 
            new TreeNode(2, 
                null, new TreeNode(9)));
        expect(largestValues(root)).toEqual([1, 3, 9]);            
    });
    it("[1,1]", () => {
        const root = new TreeNode(1, new TreeNode(1), null);
        expect(largestValues(root)).toEqual([1, 1]);            
    });
    it("[10,5,15,null,null,6,20]", () => {
        const root = new TreeNode(10, 
            new TreeNode(5, null, null), 
            new TreeNode(15, 
                new TreeNode(6), new TreeNode(20)));
        expect(largestValues(root)).toEqual([10, 15, 20]);             
    });
});