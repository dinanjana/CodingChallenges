/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxLevelSum = root => {
    const depth = getDepth(root);
    let i = 0;
    let level = 0;
    let max = Number.MIN_SAFE_INTEGER;
    while(i < depth) {
        const sum = getSumOfDepth(root, i);
        if (sum > max) {
            level = i;
            max = sum;
        }
        i++; 
    }
    return level + 1;
};

const getDepth = (root, depth = 0) => {
    if (root === null) {
        return depth;
    }
    const left = getDepth(root.left, depth + 1);
    const right = getDepth(root.right, depth + 1);

    return left > right ? left : right;
};

const getSumOfDepth = (root, depth) => {
    if (root === null) {
        return 0;
    }
    if (depth === 0) {
        return root.val;
    }
    return getSumOfDepth(root.left, depth - 1) + getSumOfDepth(root.right, depth - 1);
};

describe("maxLevelSum", () => {
    it("[1,7,0,7,-8,null,null]", () => {
        const root = new TreeNode(1, 
            new TreeNode(7, 
                new TreeNode(7), new TreeNode(-8)), 
            new TreeNode(0));
        expect(maxLevelSum(root)).toBe(2);    
    });
    it("[989,null,10250,98693,-89388,null,null,null,-32127]", () => {
        const root = new TreeNode(989, 
            null, 
            new TreeNode(10250, 
                new TreeNode(98693), 
                new TreeNode(-89388, 
                    null, 
                    new TreeNode(-32127))));
        expect(maxLevelSum(root)).toBe(2);            
    })
});