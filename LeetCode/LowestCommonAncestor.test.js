/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 const lowestCommonAncestor = (root, p, q) => {

    if (p === null || q === null) {
        throw new Error("Illegal arguments");
    } 
    if (p === q) {
        return p;
    }

    if (root === null) {
        return null;
    }

    if (root.val === p.val || root.val === q.val) {
        return root;
    }

    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);

    if (left !== null && right !== null) {
        return root;
    } else {
        return left ? left : right;
    }
    
};