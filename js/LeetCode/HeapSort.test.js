class HeapSort {
    constructor(arr) {
        this.arr = arr;
    }

    get getArray() {
        return this.arr;
    }

    sort () {
        const n = this.arr.length;
        for (let i = Math.floor(n/2) -1; i >= 0; i--) {
            this.heapify(n, i);
        }

        for (let i = n - 1; i > 0; i--) {
            const temp = this.arr[0];
            this.arr[0] = this.arr[i];
            this.arr[i] = temp;

            this.heapify(this.arr, i, 0);
        }
    }

    heapify (n, i) {
        let largest = i;
        let l = 2*i + 1;
        let r = 2*i + 2;

        if (l < n && this.arr[l] && this.arr[l] > this.arr[largest]) {
            largest = l;
        }

        if (r < n && this.arr[r] && this.arr[r] > this.arr[largest]) {
            largest = r;
        }

        if (largest !== i) {
            const swap = this.arr[i];
            this.arr[i] = this.arr[largest];
            this.arr[largest] = swap;

            this.heapify(n, largest);
        }

    }
};

describe("Heap sort", () => {
    it("[12, 11, 13, 5, 6, 7]", () => {
        const obj = new HeapSort([12, 11, 13, 5, 6, 7]);
        obj.sort();
        console.log(obj.getArray)
        expect(obj.getArray).toEqual([5,6,7,11,12,13]);
    });
});
