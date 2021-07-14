/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// [1,2,3,4] => [2,1,4,3]
 const swapPairs = head => {
    if (!head || head.next === null) {
        return head;
    }
    let current = head; // 1
    const newHead = head.next; // 2
    let next = head.next;
    let link = null;
    while(next) {
        const nextOfNext = next.next; // 3, null
        next.next = current // 2 -> 1, 4 -> 3
        current.next = nextOfNext;// 3, null
        if (link) {
            link.next = next; // none, 1 -> 4
        }
        link = current; // 1, 3

        current = current.next; // 3, null
        next = current && current.next; // 4, null
        console.log(current)
    }
    return newHead;
};

describe("swapPairs", () => {
    it("[1,2,3,4,5]", () => {
        const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
        expect(swapPairs(head)).toEqual(new ListNode(2, new ListNode(1, new ListNode(4, new ListNode(3, new ListNode(5))))));
    })
    it("[1,2,3,4]", () => {
        const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
        expect(swapPairs(head)).toEqual(new ListNode(2, new ListNode(1, new ListNode(4, new ListNode(3)))));
    })
    it("[1,2,3]", () => {
        const head = new ListNode(1, new ListNode(2, new ListNode(3)));
        expect(swapPairs(head)).toEqual(new ListNode(2, new ListNode(1, new ListNode(3))));
    })
    it("[1]", () => {
        const head = new ListNode(1);
        expect(swapPairs(head)).toEqual(new ListNode(1));
    })
    it("[]", () => {
        expect(swapPairs(null)).toEqual(null);
    })
})