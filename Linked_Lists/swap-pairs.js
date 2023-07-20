/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let swapPairs = function(head) {
    // create a new linked list
    let dummy = new ListNode();
    dummy.next = head;
    let result = dummy;
    while(dummy.next && dummy.next.next){
        let p= dummy.next;
        let q = dummy.next.next;
        dummy.next = q;
        p.next = q.next;
        q.next = p;
        dummy = p
    }
    return result.next
};

/* 
A linked list is a collection of sequentially stored objects (called nodes). Each node must contain two properties: an associated value, and a reference to the next node in the list.
Unlike in an array, nodes in a linked list are not accessible directly via index. The only way to traverse the list is to iterate over each node, starting from the first (called the 'head'), using its 'next' property to access the one that follows.
The last node in the list (called the 'tail') should have a 'next' property that is set to 'null', indicating that nothing follows it.

***************      ***************      ***************       
** value: 1 ***      ** value: 2 ***      ** value: 3 ***
** next: --------->  ** next: --------->  ** next: --------->  NULL
***************      ***************      ***************     

Following these specifications, declare a constructor function 'ListNode' for a node in a linked list. It should take one argument, which will be assigned to that node's value.
Next, declare a variable called 'linkedList', and assign it to a new ListNode instance with the value of your choosing.
*/



// Make a class called "LinkedList"
class LinkedList {
    // initialize an object with a constructor
      // the constructor takes one arguement (the node value)
    // and its assigne the nodes value
    constructor(...vals) {
      this.value = vals.forEach((el) => {
        this.push(el)
      })
      this.next = null;
      this.tail = null;
    }

    addToHead(value) {
      // create a new node
      // set the value of the new node to the input value
      const newNode = new LinkedList(val);
    
      // if the head of the linked list is null...
      if (this === null) {
        // set this.head to the newNode and this.tail to newNode (short-cut)
        this = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this;
        this = newNode;
      }
    };
    
    push(node) {
      let currNode = this
      while (currNode.next != null){
        currNode = currNode.next
      }
      const newNode = new LinkedList(val);
      currNode.next = newNode
    };
    
    // Inputs: new node value, node index (starting at 0) 
    // Output: linkedList with a modified node at passed in index
  
    // add method to class LinkedList prototype called addToIndex
    // addToIndex will take in two inputs (defined above)
    // initialize a variable the trackes current node
  
    // using a for loop that iterates "index" number of times
      // find the node of the passed in arguement (using a conditional)
      // once found, create a new "LinkedList" with passed in value
      // reassigen next value as the "next" value of the original linkedList
      // condition: If the index is greater than the lenght of the linked List
        // append the node value to the e
    
    addToIndex(val, index) {
      let curNode = this;
      
      for (let i = 0; i < index; i++) {
        if (curNode.next === null) break;
        curNode = curNode.next;
      }
  
      const newNode = new LinkedList(val);
      [ newNode.next, curNode.next ] = [ curNode.Node, newNode ];
    }
  } 
      
  
  //use the new keyword to create a new instance of the LinkList class
  const linkedList = new LinkedList(1);
  
  linkedList.addToEnd(2);
  linkedList.addToEnd(3);
  linkedList.addToEnd(5);
  linkedList.addToIndex(4, 2);
  linkedList.addToIndex(6, 20);
  
  console.log(linkedList)
  
  /* 
  Declare a method 'addToIndex', accessible to all instances of the ListNode object. 'addToIndex' should add a new value to a specified location in the linked list, using a 0-based indexing system. It should take two arguments: the new node's value, and a number of 1 or greater which represents the index to add it to.
  'addToIndex' may not modify the head of the linked list, but should be able to add a node at any other location.
  If adding a node anywhere in the middle of the list, all preceding and following nodes must remain in the same order.
  If the passed-in index number is greater than the length of the list, simply add the node to the end.
  For example:
  linkedList.addToIndex('a', 1) // should add a node with the value 'a' to the SECOND place in the list (index 1)
  linkedList.addToIndex('b', 3) // should add a node with the value 'a' to the FOURTH place in the list (index 3)
  linkedList.addToIndex('z', 0) // should do nothing
  linkedList.addToIndex('z', Infinity) // should add a node with the value 'z' to the LAST place in the list, whatever index that is
  */

  var reverseList = function(head) {
    
    // base case
    if (head == null || head.next == null) return head
    
    // Expand the linked list onto stack frames
    let result = reverseList(head.next);
    // console.log(result)
    // makinig the last element in the stack frame the head
    head.next.next = head
    // and the first element in every frame point towards null
    head.next = null;
    
    // once the base case is reached, return result
    return result;
};

///////////////////////////////////////////////////////////////////////////

/*
Given a linked list, swap every two adjacent nodes and return its head. You 
must solve the problem without modifying the values in the list's 
nodes (i.e., only nodes themselves may be changed.)
 
*/

// Iterative Approach


let swapPairs = function(head) {
  // create a new linked list
  let dummy = new ListNode();
  // Set the next element of dummy to head
  dummy.next = head;
  // Set up a returnable linked list
  let result = dummy;
  // While there is a ll.next and a ll.next.next
  while(dummy.next && dummy.next.next){

      // break the list into pairs
      let p= dummy.next;
      let q = dummy.next.next;

      dummy.next = q;
      
      p.next = q.next;
      q.next = p;
      dummy = p
 
  }
  return result.next
};

// Recursive  (slower than the Iterative Approach)

function swapPairs(head) {

      // If the list has no node or has only one node left.
      if (!head || !head.next){
          return head;
      }

      // Nodes to be swapped
      let firstNode = head;
      let secondNode = head.next // point to the rest of the linked list minus the first node

      // Swapping
      firstNode.next  = swapPairs(secondNode.next) //
      secondNode.next = firstNode 
      
      // Now the head is the second node

      // We eventually return the pointer of the head of the swapped list
      return secondNode;
};

// Stack Method

function swapPairs(head) {
// initialize a stack
let stack = [];
stack.push(null);
// initialize a new Linked List
let current = new ListNode()
current = head;


while(current != null) { 
  if(stack.length == 2) {
    let next = current.next;
    let prior = stack.pop();
    let priorPrior = stack.pop();
    if(priorPrior != null) priorPrior.next = current;
    else head = current;
    current.next = prior;
    prior.next = next;
    current = prior;                
    }
  stack.push(current);
  current = current.next;
  }
return head;
}


////////////////////////////////////////////


const searchBST = function(root, val) {
	// if the tree is empty OR the value is the root, return root
    if (root == null || val == root.val) return root;
    // else if value is less than root is, return root.left(revcusive call), otherwise return
    return val < root.val ? searchBST(root.left, val) : searchBST(root.right, val)
};