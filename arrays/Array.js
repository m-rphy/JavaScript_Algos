// the following constructor function should create an object with a push and pop method
// do not use the built-in array type or its methods
function Erray() {
  this.index = -1
  this.length = 0
  this.contents = {};
}

Erray.prototype.push = function(...values) {
  // push all the values with matching indices 
  for (let i = 0; i < values.length; i++) {
    this.index++;
    this.contents[this.index] = values[i];
  }
  // update length
  this.length = this.index + 1
}

Erray.prototype.pop = function () {
  // hold onto the last element, delete it, decrement index,
  // then return deleted element
  let curr = this.contents[this.index];
  delete this.contents[this.index];
  this.index--;
  // update length
  this.length = this.index + 1
  return curr;
}

Erray.prototype.shift = function () {
  // hold onto the first element
  if (this.contents[0] === undefined) {
    return
  }
  let curr = this.contents[0];
  // re-assign each index to the next element
  for (let i = 0; i < this.index; i++) {
    this.contents[i] = this.contents[i+1];
  }
  // delete undefined element (last element)
  delete this.contents[this.index];
  // decrement index to 
  this.index--;
  // return first element
  // update length
  this.length = this.index + 1
  console.log(this.length, this.index)
  return curr;
}

Erray.prototype.unshift = function (...values) {
  // re-define index to accomodate new elements
  this.index += values.length;
  // loop from last to first
  for (let i = this.index; i >= 0; i--) {
    // if element is part of original array
    if (i >= values.length) {
      // set a new index
      this.contents[i] = this.contents[i - values.length];
    }
    // these are newly added elements
    else this.contents[i] = values[i];
  }
  // update length
  this.length = this.index + 1
  return this.index;
}

//////////// Test ////////////////
// console.log(Erray)

// const erray = new Erray;

// console.log(erray)
// console.log(erray.push(0, 1, 2, 3))
// console.log(erray)

// // console.log(erray.pop())
// // console.log(erray)

// console.log(erray.shift())
// console.log(erray)

// // console.log(erray.unshift(-2, -1, 0))
// // console.log(erray)
