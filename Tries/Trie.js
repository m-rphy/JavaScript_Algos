  
  function Trie() {
    this.root = new TrieNode();
  }

  function TrieNode() {
    this.children = {};
    this.endOfWord = false;
  }
  
  Trie.prototype.insert = function(word) {
    let currentNode = this.root;
    for (let i = 0; i < word.length; i++) {
      const ch = word[i];
      if (!currentNode.children[ch]) {
        currentNode.children[ch] = new TrieNode();
      }
      currentNode = currentNode.children[ch];
    }
    currentNode.endOfWord = true;
  };
  
  Trie.prototype.find = function(prefix) {
    let currentNode = this.root;
    for (let i = 0; i < prefix.length; i++) {
      const ch = prefix[i];
      if (!currentNode.children[ch]) {
        return false;
      }
      currentNode = currentNode.children[ch];
    }
    return true;
  };

// This implementation uses a TrieNode class to represent 
// each node in the tree, which has a children object to store 
// references to its child nodes, and a boolean endOfWord flag 
// to indicate if the node represents the end of a word.

// The Trie class has a root property that references the root 
// node of the tree. The insert method inserts a new word into 
// the tree by iterating through each character of the word and 
// adding a new node to the tree if it doesn't already exist. The 
// endOfWord flag is set on the final node to indicate that the 
// word has been fully inserted into the tree.

// The find method checks if a given prefix exists in the tree 
// by iterating through each character of the prefix and traversing 
// the tree along the corresponding edges. If any character in the 
// prefix is not found in the tree, the method returns false. Otherwise, 
// if the prefix is found in the tree, the method returns true.

// Note that this implementation assumes that the input strings only 
// contain lowercase alphabetical characters. If other characters are 
// allowed, the children object could be replaced with a 
// Map or Set to handle arbitrary keys.