// do not use any native array methods
function Queue() {
    this.storage = {};
    this.index = -1;
}

Queue.prototype.enqueue = function(...values) {
      // push all the values with matching indices 
  for (let i = 0; i < values.length; i++) {
    this.index++;
    this.storage[this.index] = values[i];
  }
};

Queue.prototype.dequeue = function() {
    // hold onto the first element
  if (this.storage[0] === undefined) {
    return
  }
  let curr = this.storage[0];
  // re-assign each index to the next element
  for (let i = 0; i < this.index; i++) {
    this.storage[i] = this.storage[i+1];
  }
  // delete undefined element (last element)
  delete this.storage[this.index];
  // decrement index to 
  this.index--;
  // return first element
  return curr;
};


//////////// Test ////////////////

// const stack = new Queue

// stack.enqueue(1);
// console.log(stack.storage);
// stack.enqueue(2);
// console.log(stack.storage);
// stack.enqueue(3);
// console.log(stack.storage);
// console.log(stack.dequeue())
// console.log(stack.storage);
// console.log(stack.dequeue())
// console.log(stack.storage);
// console.log(stack.dequeue())
// console.log(stack.dequeue())

/*
[Running] node "/Users/wjm/codesmith/unit-2-data-structure/src/tempCodeRunnerFile.js"
{ '0': 1 }
{ '0': 1, '1': 2 }
{ '0': 1, '1': 2, '2': 3 }
1
{ '0': 2, '1': 3 }
2
{ '0': 3 }
3
undefined
*/