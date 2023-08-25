/* Create a Data structure that once mapped is capable of finding
 * a word in an arbitarily large data set in O(n) time
 * where n is the length of the word
*/

// Example Input
const wordsArray = ["cat", "car"] //-> "*at"

// Example Mapping
const wordMap = {
    "c" : {
        "a": {
            "t": true,
            "r": true
        }
    }
  }

// Maps the input array
function createWordMap(wordsArray) {
    // intitalize a word map
    let wordMap = {};

    // iterate through the wordsArray
    for (let word of wordsArray) {
        let currentMap = wordMap;
        for (let letter of word) {
        if (!currentMap.hasOwnProperty(letter)) {
            currentMap[letter] = {};
        }
        currentMap = currentMap[letter];
        }
        currentMap['$'] = true;
    }
    return wordMap;
}

// Trie with wildCard support 
function TrieNode() {
  this.children = new Map();
  this.isEndOfWord = false;
  // this.suffixLink = null;
}

function createWordMap(wordsArray) {
  const root = new TrieNode();

  // Build the Trie
  for (const word of wordsArray) {
    let currNode = root;
    for (const char of word) {
      if (!currNode.children.has(char)) {
        currNode.children.set(char, new TrieNode());
      }
      curtNode = currNode.children.get(char);
    }
    currNode.isEndOfWord = true;
  }
  console.log(root)

  function traverse(node, prefix) {
    if (node.isEndOfWord) {
      wordMap[prefix] = true;
    }
    for (const [char, childNode] of node.children.entries()) {
      const nextPrefix = prefix + char;
      if (nextPrefix.startsWith(patternPrefix) || patternPrefix.startsWith(nextPrefix)) {
        traverse(childNode, nextPrefix);
      }
    }
  }

  // Function to find words with wildcard pattern
  function findWordsWithWildcard(pattern) {
    patternPrefix = pattern.slice(0, -1);
    const rootNode = pattern.charAt(0) === '*' ? root : root.children.get(pattern.charAt(0));
    traverse(rootNode, '');
    return Object.keys(wordMap);
  }

  return {
    findWordsWithWildcard,
  };
}


const map = createWordMap(wordsArray);

console.log(map.findWordsWithWildcard('t'))
