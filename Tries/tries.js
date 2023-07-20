
const wordsArray = ["cat", "car"] //-> "*at"
const wordMap = {
    "c" : {
        "a": {
            "t": true,
            "r": true
        }
    }
  }


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

// console.log(createWordMap(wordsArray))

// class TrieNode {
//     constructor() {
//         this.children = new Map();
//         this.isEndOfWord = false;
//     }
// }
  
// function createTrieWordMap(wordsArray) {
//     const root = new TrieNode();

//     for (const word of wordsArray) {
//         let currentNode = root;
//         for (const char of word) {
//         if (!currentNode.children.has(char)) {
//             currentNode.children.set(char, new TrieNode());
//         }
//         currentNode = currentNode.children.get(char);
//         }
//         currentNode.isEndOfWord = true;
//     }

//     const wordMap = {};

//     function traverse(node, prefix) {
//         if (node.isEndOfWord) {
//         wordMap[prefix] = true;
//         }
//         for (const [char, childNode] of node.children.entries()) {
//         traverse(childNode, prefix + char);
//         }
//     }

//     traverse(root, '');

//     return wordMap;
// }

// console.log(createTrieWordMap(wordsArray) )

// class Dictionary {
//     constructor(wordsArray) {
//         const wordMap = wordsArray.reduce((acc, word) => {
//             acc[word] = true;

//             word.split('').forEach((letter, i) => {
//                 const start = word.slice(0, i);
//                 const end = word.slice(i + 1);

//                 const partialWord = `${start}*${end}`;

//                 acc[partialWord] = true
//             })

//             return acc
//         }, {})
//         this.dict = wordMap;
//     }

//     isIndict(word) {
//         return !!this.dict[word]
//     }
// }


// Trei with wildCard support 
class TrieNode {
    constructor() {
      this.children = new Map();
      this.isEndOfWord = false;
      this.suffixLink = null;
    }
  }
  
  function createWordMap(wordsArray) {
    const root = new TrieNode();
  
    for (const word of wordsArray) {
      let currentNode = root;
      for (const char of word) {
        if (!currentNode.children.has(char)) {
          currentNode.children.set(char, new TrieNode());
          console.log(currentNode.children.set(char, new TrieNode()))
        }
        currentNode = currentNode.children.get(char);
      }
      currentNode.isEndOfWord = true;
    }
  
    // Set up suffix links
    root.suffixLink = root;
    const queue = [root];
    while (queue.length > 0) {
      const currentNode = queue.shift();
      for (const [char, childNode] of currentNode.children.entries()) {
        let suffixLinkNode = currentNode.suffixLink;
        while (suffixLinkNode !== root && !suffixLinkNode.children.has(char)) {
          suffixLinkNode = suffixLinkNode.suffixLink;
        }
        if (suffixLinkNode.children.has(char)) {
          childNode.suffixLink = suffixLinkNode.children.get(char);
        } else {
          childNode.suffixLink = root;
        }
        queue.push(childNode);
      }
      if (currentNode !== root && currentNode.suffixLink.isEndOfWord) {
        currentNode.isEndOfWord = true;
      }
    }
  
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
      if (node.suffixLink !== null && (patternPrefix === '' || patternPrefix.startsWith(prefix))) {
        traverse(node.suffixLink, prefix);
      }
    }
  
    const wordMap = {};
    let patternPrefix = '';
  
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


  createWordMap(wordsArray)