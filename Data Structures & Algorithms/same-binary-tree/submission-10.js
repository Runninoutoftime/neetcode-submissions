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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        const queue1 = [];
        const queue2 = [];
        queue1.push(p);
        queue2.push(q);
        if (p === null && q === null) {
            return true;
        }
        if ((!p) !== (!q)) {
            return false;
        }
        if (p.val !== q.val) {
            return false;
        }
        while (queue1.length > 0) {
            for (let i = 0; i < queue1.length; i++) {
                let node = queue1.shift();
                let node2 = queue2.shift();
                if (node.left && node2.left && node.left.val === node2.left.val) {
                    queue1.push(node.left);
                    queue2.push(node2.left);
                } else if (node.left && node2.left && node.left.val !== node.left.val) {
                    return false;
                } else if ((!node.left) !== (!node2.left)) {
                    return false;
                }
                if (node.right && node2.right && node.right.val === node2.right.val) {
                    queue1.push(node.right);
                    queue2.push(node2.right);
                } else if (node.right && node2.right && node.right.val !== node2.right.val) {
                    return false;
                } else if ((!node.right) !== (!node2.right)) {
                    return false;
                }
            }
        }
        return true;

    }
}
