// [1,2,3,4,5] k=2 => [2,1,4,3,5]
// [1,2,3,4,5] k=3 => [3,2,1,4,5]
/**
 * 1 => 2 => 3
 * h = 1
 * 2 => 1 => 3
 * 2 => 3 => 1
 * 3 => 2 => 1
*/

/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const reverseKGroup = (head, k) => {
    if (!head || head.next === null || k === 1) {
        return head;
    }
    let next = head; 
    let nodes = [];
    let newHead = null;
    let link = null;
    let i = 0;
    while(next || nodes.length === k) {
        if (i === k) { 
            i = 0;
            const groupHead = nodes[nodes.length - 1];
            if(!newHead) {
                newHead = groupHead; // 3
            }
            if(link) {
                link.next = groupHead; // 1 -> 6
            }
            link = nodes[0]; // 1
            for(let i = nodes.length - 1; i >= 0; i--) {
                nodes[i].next = i > 0 ? nodes[i - 1] : next;
            }
            nodes = []; // []
        }
        nodes.push(next); // [1],[1,2],[1,2,3], [4],[4,5],[4,5,6]
        next = next && next.next;// 2,3,4,5,6,7
        i++;
    }
    return newHead;
};

describe("reverseKGroup", () => {
    it("[1,2,3,4,5] k=3", () => {
        const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
        expect(reverseKGroup(head, 3)).toEqual(new ListNode(3, new ListNode(2, new ListNode(1, new ListNode(4, new ListNode(5))))));
    });
    it("[1,2,3,4,5,6] k=3", () => {
        const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))));
        expect(reverseKGroup(head, 3)).toEqual(new ListNode(3, new ListNode(2, new ListNode(1, new ListNode(6, new ListNode(5, new ListNode(4)))))));
    });
    it("[] k=3", () => {
        const head = null;
        expect(reverseKGroup(head, 3)).toEqual(null);
    });
    it("[1] k=3", () => {
        const head = new ListNode(1);
        expect(reverseKGroup(head, 3)).toEqual(head);
    });
    it("[1,2,3,4,5] k=1", () => {
        const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
        expect(reverseKGroup(head, 1)).toEqual(head);
    });
    it("[1,2,3,4,5]", () => {
        const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
        expect(reverseKGroup(head, 2)).toEqual(new ListNode(2, new ListNode(1, new ListNode(4, new ListNode(3, new ListNode(5))))));
    })
});
