function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

const mergeTwoLists = (l1, l2, tail, head) => {
  if (!l1 && !l2) {
    if (head) {
        return head;
    }  
    return null;
  }
  if (!l1) {  
    if (head) {
        tail.next = l2;
    } else {
        head = l2;
    }  
    return head;
  }
  if(!l2) {
    if (head) {
        tail.next = l1;
    } else {
        head = l1
    }  
    return head;
  }
  if (l1.val > l2.val) {
      if (head) {
          tail.next = new ListNode(l2.val);
          return mergeTwoLists(l1, l2.next, tail.next, head);
      } else {
          head = new ListNode(l2.val, null);
          return mergeTwoLists(l1, l2.next, head, head);
      }   
  } else if (l1.val === l2.val) {
    if (head) {
        tail.next = new ListNode(l1.val);
        tail.next.next = new ListNode(l2.val);
        //console.log(head)
        return mergeTwoLists(l1.next, l2.next, tail.next.next, head);
    } else {
        head = new ListNode(l1.val, new ListNode(l2.val));
        return mergeTwoLists(l1.next, l2.next, head.next, head);
    }   
  } else {
    if (head) {
        tail.next = new ListNode(l1.val);
        return mergeTwoLists(l1.next, l2, tail.next, head);
    } else {
        head = new ListNode(l1.val, null);
        return mergeTwoLists(l1.next, l2, head, head);
    }
  }
};

describe("mergeTwoLists", () => {
    it("[1,2,4] [1,3,4]", () => {
        const l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
        const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
        console.log(mergeTwoLists(l1, l2))
        expect(mergeTwoLists(l1, l2)).toEqual(
            new ListNode(1, 
                new ListNode(1, 
                    new ListNode(2, 
                        new ListNode(3, 
                            new ListNode(4, 
                                new ListNode(4)))))));
    });
    it("[] []", () => {
        const l1 = new ListNode();
        const l2 = new ListNode();
        console.log(mergeTwoLists(l1, l2))
    })
});