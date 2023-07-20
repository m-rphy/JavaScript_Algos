
// This is a singly linked list (Head -> Tail)

function LinkedList(...args) {
  this.head = null;
  this.tail = null;
  args.forEach((arg) => {
    this.push(arg);
  });
};

function Node(val) {
  this.value = val;
  this.next = null;
};

// adds node to end of list
LinkedList.prototype.push = function(value) {

  // create a new node
  const newNode = new Node(value);

  // if the head of the linked list is null...
  if (this.head === null) {
    // set this.head to the newNode
    this.head = newNode;
    // point newNode.next the tail
    this.tail = newNode;
  } else {
    // tail is pointing to the newNode
  this.tail.next = newNode;
  // reassign tail to equal newNode
  this.tail = this.tail.next;
  }
};

// We have to traverse the entire LL to see if the value of the node is equal to the 
// input value

// returns true if value is present in the list
LinkedList.prototype.contains = function(value) {
    // to begin traversing the LL, we set currNode to equal this.head
    let currNode = this.head;
  
    // while current.next doesn't equal null (null signifying the end of the LL)

    // !! NOTE while loops break with null conditions !! //
   while (currNode) {
      // if current node's value is equal to value
      if (currNode.value === value) {
        // return true!
        return true;
      };
      // !!! Necessary the traverse the LL !! //
      currNode = currNode.next
    };
    // if we get the end of the LL and never meet our conditional, return false
    return false;
};


// Bonus
// adds node to beginning of list
LinkedList.prototype.addToHead = function(value) {
  // create a new node
  // set the value of the new node to the input value
  const newNode = new Node(val);

  // if the head of the linked list is null...
  if (this.head === null) {
    // set this.head to the newNode and this.tail to newNode (short-cut)
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.next = this.head;
    this.head = newNode;
  }
};


// Extra Bonus
// insert an item at the position specified
LinkedList.prototype.insert = function(value, position) {
  const newNode = new Node(value)
   
    //create a counter var to keep track of how many nodes that we have passed though
    let counter = 0;
    //this is creating a varible that is allowing us to start at the head of the linked list
    let currNode = this.head
    //create a while loop that checks to see if the next property is null, if it is not then it will
    //save the pointer of the currNode to the var prevNode
    //it will set currNode to next pointer in the linked list
    while(currNode.next){
      let prevNode = currNode;
      currNode = currNode.next;
      //when counter is equal to position, we have gotten to where we want to insert the new pointer
      if(counter === position){
        //resign previously saved pointer from node to a newNode
        prevNode.next = newNode;
        //assign the next var (the newNodes pointer) to the currNode
        newNode.next = currNode;
      }
      //increase counter for each node that we pass though
      counter++
    }
};



// Extra Bonus
// remove first occurrence of value from list
LinkedList.prototype.removeItem = function(value) {
      // to begin traversing the LL, we set currNode to equal this.head
      let currNode = this.head;

      if (currNode.value === value) {
        this.head = currNode.next
      }
      if (this.head === null) {
        this.tail = null;
      }
  
      // traverse the LL with a while loop
      while (currNode.next) {
        
        // save the previous Node so we can reassign it's "next" value if value is found
        let prevNode = currNode;
        
        // Continue traversing the LL
        currNode = currNode.next;

        // If we find the value
        if (currNode.value === value) {
          // pass over the current Node value by reassigning the previous node the point
          // the next node past our 
          prevNode.next = currNode.next;
          // boundary condition for if the last node has the desired value
          if (currNode === this.tail) {
            this.tail = prevNode;
          }
      };
    };
};




// Extra Bonus
// remove element at specified position in list
LinkedList.prototype.removePosition = function(position) {

};
