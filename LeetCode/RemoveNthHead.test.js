/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
    const idx = getLength(head) - n;
    removeNth(head, idx);
    return head; 
};

const getLength = (head) => {
    if(!head.next) {
       return 1; 
    }
    return 1 + getLength(head.next);
};

const removeNth = (head, n, currentIdx = 0) => {
    const prevIndex = n - 1;
    if(prevIndex <= 0) {
        head.next = null;
        head.val = null;
        return;
    }
    if(currentIdx === prevIndex) {
        head.next = head.next && head.next.next ? head.next.next : null;
        return;
    }
    return removeNth(head.next, n, currentIdx + 1);
};

describe("removeNthFromEnd", () => {
    it("Input: head = [1,2,3,4,5], n = 2", () => {
        const head = new ListNode();
        head.val = 1;
        head.next = new ListNode();
        head.next.val = 2;
        head.next.next = new ListNode();
        head.next.next.val = 3;
        head.next.next.next = new ListNode();
        head.next.next.next.val = 4;
        head.next.next.next.next = new ListNode();
        head.next.next.next.next.val = 5;

        const newHead = removeNthFromEnd(head, 2);
        expect(newHead.next.next.next.val).toBe(5);
    });
    it("Input: head = [1], n = 1", () => {
        const head = new ListNode();
        head.val = 1;
        removeNthFromEnd(head, 1);
        console.log(head)
        expect(head).toEqual(new ListNode(null, null));
    });
});
