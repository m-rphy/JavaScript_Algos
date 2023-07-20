function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

  // initialize a new BST with root value = 8
  const branch = new BinarySearchTree(8);

  // NOTE -- We're only putting a new node at the end of a branch

BinarySearchTree.prototype.add = function(value) {
    // create new nodeBranch with a single argument
    let newBranch = new BinarySearchTree(value)
    //set this to the variable currNode to help with visualization
    let currNode = this;
   
   
  //Run a while loop that only stops when it encounters a "break" or "return"
  while (true){

    // checking the value with the left path
    if (value < currNode.value) {
      //check to see if left branch is null
      if (currNode.left === null) {
        //if null, create a new branch
        currNode.left = newBranch;
        //end loop
        return;
        //if it is not null, assign the currNode to the left branch, do not end the loop;
      } else {
      currNode = currNode.left
      }
      
    // checking the value with the right path
    } else if (value > currNode.value) {
      //check to see if the right branch is null
      if (currNode.right === null) {
        //if it is null, assign it the new branch
        currNode.right = newBranch;
        //end the loop
        return;
        //if it is not null, assign the currNode to the right branch, do not end the loop;
      } else {
        currNode = currNode.right;
      }
  
    //checking to see if the value already exists
    } else if (value === currNode.value) {
      //if so, end the loop
      return;
    };
  };
};


// /// test cases ////
branch.add(8);
branch.add(5);
branch.add(10);
// branch.add(100);

console.log(branch)


BinarySearchTree.prototype.contains = function(value) {

      //set this to the variable currNode to help with visualization
      let currNode = this;
     
      //Run a while loop that only stops when it encounters a "break" or "return"
      while (currNode){
        // true condition
        if (currNode.value === value) {
          return true;
        }

        // updating the currNode

        // checking the value with the left path
        if (value < currNode.value) {
          // update our currNode
          currNode = currNode.left
          }
         
        // checking the value with the right path
        else if (value > currNode.value) {
            currNode = currNode.right;
        }
     
    };
    return false;

};

BinarySearchTree.prototype.containsRecursive = function(value) {
  // break case: true
  if (this.value === value) {
    return true;
  };
  // recursive case 1:
  if (this.right && value> this.value) {
    return this.right.containsRecursive(value);
  }
  // recursive case 2:
  if (this.left && value < this.value) {
    return this.left.containsRecursive(value);
  }
  // Break case: false
  return false;
};



// applies the callback in the order of depth first (preorder)
BinarySearchTree.prototype.depthFirstPre = function(callback) {
  callback(this.value);
  if (this.left) this.left.depthFirstPre(callback);
  if (this.right) this.right.depthFirstPre(callback)

};

const cb = function(value) {
  console.log(value)
  return
}


// applies the callback in the order of depth first (inorder)
BinarySearchTree.prototype.depthFirstIn = function(callback) {
  if (this.left) this.left.depthFirstIn(callback);
  callback(this.value);
  if (this.right) this.right.depthFirstIn(callback)

};

// applies the callback in the order of depth first (postorder)
BinarySearchTree.prototype.depthFirstPost = function(callback) {
  if (this.left) this.left.depthFirstPost(callback);
  if (this.right) this.right.depthFirstPost(callback)
  callback(this.value);
};

// applies the callback in the order of breath first (level order)
BinarySearchTree.prototype.breadthFirst = function(callback) {

};

// Extra Bonus
// Return the minimum stored value
BinarySearchTree.prototype.min = function() {
  if (this.left) this.left.min()
  return this.value
};

// Extra Bonus
// Return the maximum stored value
BinarySearchTree.prototype.max = function() {
  if (this.right) this.right.max()
  return this.value
};

// Extra Bonus
// Return the height of the tree
BinarySearchTree.prototype.height = function() {
  if (!this.left && !this.right) {
    return 0
  }
  if (this.left) {
    return this.left.height() + 1
  }
  if (this.right) {
    return this.right.height + 1
  }
  return Math.max(this.left.height +1, this.right.height() + 1)
};

// Extra Bonus
// Remove an item from the tree and ensure that the children of the item are properly repositioned
BinarySearchTree.prototype.remove = function(item) {

};

function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

// define the function
const searchBST = function(root, val) {
	// if the tree is empty OR the value is the root, return root
    if (root == null || val == root.val) return root;
    // else if value is less than root is, return root.left(revcusive call), otherwise return
    return val < root.val ? searchBST(root.left, val) : searchBST(root.right, val)
};

/*

Given the root of a binary search tree, determine the sum of all the values.
Note that the function signature is NOT defined as a method on the
BinarySearchTree prototype. Instead, we provide the root as an argument to the
function.

*/

// tree = new BinarySearchTree(1);
// tree.left = new BinarySearchTree(1);
// tree.left.left = new BinarySearchTree(1);
// tree.left.right = new BinarySearchTree(1);
// tree.right = new BinarySearchTree(1);


const bstSum = (root, result = 0) => {
  if (!root) return 0
  else {
    result += root.value + bstSum(root.left, result) + bstSum(root.right, result);
  }
  return result
};

// console.log(bstSum(tree))

/*
Extension:
Given the root of a binary search tree, reverse the binary search tree in-place
and return the root. Reverse the tree so that for each node, every number on the
left is greater and every number on the right is lesser.

For example, the original tree:

     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8

reverses to:

     4
   /   \
  7     2
 /     / \
9     3   1
 \
  8

Do this in-place, so that we never use the BinarySearchTree constructor to
create any new nodes in memory.

Note that the function signature is NOT defined as a method on the
BinarySearchTree prototype. Instead, we provide the root as an argument to the
function.

*/

tree = new BinarySearchTree(4);
tree.left = new BinarySearchTree(2);
// tree.left.left = new BinarySearchTree(1);
// tree.left.right = new BinarySearchTree(1);
tree.right = new BinarySearchTree(7);
// console.log(tree)

const bstReverse = root => {
  if(!root){
    return root;
  }

  if(root){
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    reverseBinaryTree(root.left);
    reverseBinaryTree(root.right);
  }
return root;
};

