// Extra Bonus
// Store items so that the item of highest priority can be efficiently removed
function PriorityQueue() {
    this.items = [];
  }
  
  PriorityQueue.prototype.enqueue = function(item, priority = this.items.length) {
    const newItem = { item: item, priority: priority };
    let index = 0;
    while (index < this.items.length && priority >= this.items[index].priority) index++;
  
    this.items.splice(index, 0, newItem);
  };
  
  PriorityQueue.prototype.dequeue = function() {
    if (this.items.length === 0) {
      return undefined;
    }
    return this.items.shift().item;
  };

//   This array-based implementation, 
// the enqueue operation takes O(n) time complexity because we 
// need to traverse the entire array to find the correct position 
// to insert the new element. The dequeue operation also takes O(n) 
// time complexity because we need to search through the entire 
// array to find the highest priority element.


//////////////////////////////////////////////////////////////////
//////////////////////// HEAP METHOD /////////////////////////////
//////////////////////////////////////////////////////////////////

// This heap-based implementation takes O(log n) time complexity 
// for both enqueue and dequeue operations. This is because the 
// heap structure maintains the elements in a way that allows us 
// to insert and remove elements in logarithmic time complexity.

  class PriorityQueue {
    constructor() {
      this.heap = [];
    }
  
    enqueue(item, priority) {
      this.heap.push({ item, priority });
      this.bubbleUp(this.heap.length - 1);
    }
  
    dequeue() {
      const max = this.heap[0];
      const end = this.heap.pop();
      if (this.heap.length > 0) {
        this.heap[0] = end;
        this.sinkDown(0);
      }
      return max.item;
    }
  
    bubbleUp(index) {
      const element = this.heap[index];
      while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
        const parent = this.heap[parentIndex];
        if (element.priority <= parent.priority) break;
        this.heap[index] = parent;
        this.heap[parentIndex] = element;
        index = parentIndex;
      }
    }
  
    sinkDown(index) {
      const element = this.heap[index];
      const length = this.heap.length;
      while (true) {
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;
        let leftChild, rightChild;
        let swap = null;
  
        if (leftChildIndex < length) {
          leftChild = this.heap[leftChildIndex];
          if (leftChild.priority > element.priority) {
            swap = leftChildIndex;
          }
        }
  
        if (rightChildIndex < length) {
          rightChild = this.heap[rightChildIndex];
          if (
            (swap === null && rightChild.priority > element.priority) ||
            (swap !== null && rightChild.priority > leftChild.priority)
          ) {
            swap = rightChildIndex;
          }
        }
  
        if (swap === null) break;
        this.heap[index] = this.heap[swap];
        this.heap[swap] = element;
        index = swap;
      }
    }
  
    size() {
      return this.heap.length;
    }
  
    isEmpty() {
      return this.heap.length === 0;
    }
  }
