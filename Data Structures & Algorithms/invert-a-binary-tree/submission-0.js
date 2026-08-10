/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {
        const queue = [root];
        while (queue.length > 0) {
            const node = queue.shift();
            if (!node) {
                continue;
            }
            const tempRight = node.right;
            node.right = node.left;
            node.left = tempRight;
            queue.push(node.left);
            queue.push(node.right)
            
        }

        return root;
    }
}
