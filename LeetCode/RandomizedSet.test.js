/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.set = {};
    this.count = 0;    
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.set[val]) {
        return false;
    }
    this.set[val] = true;
    ++this.count;
    return this.set[val];
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(!this.set[val]) {
        return false;
    }
    delete this.set[val];
    --this.count;
    return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const randomProb = Math.random();
    const randomIdx = Math.floor(randomProb * this.count);
    return Object.keys(this.set)[randomIdx];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */