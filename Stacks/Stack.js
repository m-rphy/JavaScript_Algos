// do not use any native array methods
function Stack() {
  this.storage = {};
  this.index = -1;
}

Stack.prototype.push = function(...values) {
  for (let i = 0; i < values.length; i++) {
    this.index++;
    this.storage[this.index] = values[i];
  }
  // return this.storage;
};

Stack.prototype.pop = function() {
    // hold onto the last element, delete it, decrement index,
  // then return deleted element
  let curr = this.storage[this.index];
  
  delete this.storage[this.index];
  this.index--;
  return curr;
};

//////////// Test ////////////////

// const stack = new Stack

// stack.push(1);
// console.log(stack.storage);
// stack.push(2);
// console.log(stack.storage);
// stack.push(3);
// console.log(stack.storage);
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.pop())


/*
[Running] node "/Users/wjm/codesmith/unit-2-data-structure/src/tempCodeRunnerFile.js"
{ '0': 1 }
{ '0': 1, '1': 2 }
{ '0': 1, '1': 2, '2': 3 }
3
2
1
undefined
*/