/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.trie = new TrieDS();
};

var TrieDS = function (value) {
    this.value = value;
    this.children = [];
    
    this.getChild = function (char) {
        return this.children.find(child => child.value === char);
    }
    
    this.addChild = function(node) {
        this.children.push(node);
    }
}

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.trie;
    for(i = 0; i < word.length; i++) {
        let nextNode = node.getChild(word.charAt(i));
        if (!nextNode) {
            nextNode = new TrieDS(word.charAt(i));
            node.addChild(nextNode);
        }
        node = nextNode;
    }
    if (!node.getChild("")) {
        node.addChild(new TrieDS(""));
    }
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    // console.log(this.trie)
    let node = this.trie;  
    for(let i = 0; i < word.length; i++) {
        const nextNode = node.getChild(word.charAt(i));
        if (!nextNode) {
            return false;
        }
        node = nextNode;
    }
    return !!node.getChild("");
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let node = this.trie;  
    for(let i = 0; i < prefix.length; i++) {
        const nextNode = node.getChild(prefix.charAt(i));
        if (!nextNode) {
            return false;
        }
        node = nextNode;
    }
    return true; 
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */