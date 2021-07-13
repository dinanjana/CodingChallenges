/**
 * Definition for singly-linked list.
 */
 
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = (lists, mergedList, head = null) => {
  if(lists.reduce((acc, elem) => acc && elem === null, true)) {
      return head;
  }
  const { smallest, smallestElemLoc } = getSmallest(lists);
  if (head) {
    mergedList.next = new ListNode(smallest);
    mergedList = mergedList.next;
  } else {
    head = new ListNode(smallest);
    mergedList = head;
  }
  lists[smallestElemLoc] = lists[smallestElemLoc].next;
  return mergeKLists(lists, mergedList, head);
};

const getSmallest = lists => {
    let smallest = 10**4 + 1;
    let smallestElemLoc = null;
    lists.forEach((list, i) => {
        if(list !== null && list.val < smallest) {
            smallest = list.val;
            smallestElemLoc = i;
        }
    });
    return { smallest, smallestElemLoc };
};

describe("mergeKLists", () => {
    it("lists = [[1,4,5],[1,3,4],[2,6]]", () => {
        const l1 = new ListNode(1, new ListNode(4, new ListNode(5)));
        const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
        const l3 = new ListNode(2, new ListNode(6));

        expect(mergeKLists([l1, l2, l3])).toEqual(
            new ListNode(1, 
                new ListNode(1, 
                    new ListNode(2, 
                        new ListNode(3, 
                            new ListNode(4, 
                                new ListNode(4, 
                                    new ListNode(5, 
                                        new ListNode(6)))))))));
    });
    it("lists = []", () => {
        expect(mergeKLists([null])).toEqual(null);
    })
});