/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
 const leastInterval = (tasks, n) => {
    const tasksMap = tasks.reduce((a, task) => {
        a[task] = (a[task] || 0) + 1;
        return a;
    }, {});
    
    const pq = new PriorityQueue();
    Object.keys(tasksMap).forEach(task => {
        pq.add(tasksMap[task]);
    });
    let result = 0;
    while (!pq.isEmpty()) {
        const processedTasks = [];
        let time = 0;
        for (let i = 0; i <= n; i++) {
            if (!pq.isEmpty()) {
                processedTasks.push(pq.pop() - 1);
                ++time;
            }
        }
        for (remaining of processedTasks) {
            if (remaining) {
                pq.add(remaining);
            }
        }
        result += (pq.isEmpty() ? time : n  +1);
    }
    
    return result;
   
};


class PriorityQueue {
    constructor() {
        this.queue = [];
    }
    
    get getQueue () {
        return this.queue
    }

    add (elem) {
        let idx = this.queue.findIndex(e => elem > e);
        if (idx < 0) {
            this.queue.push(elem);
        } else {
            this.queue.splice(idx, 0, elem);
        }
    }
    
    pop () {
        return this.queue.shift();
    }
    
    isEmpty () {
        return this.queue.length === 0;
    }
}

describe("leastInterval", () => {
    it('["A","A","A","B","B","B"], 2', () => {
        expect(leastInterval(["A","A","A","B","B","B"], 2)).toEqual(8);
    });
    it('["A","A","A","A","A","A","B","C","D","E","F","G"], 2', () => {
        expect(leastInterval(["A","A","A","A","A","A","B","C","D","E","F","G"], 2)).toEqual(16);
    })
});