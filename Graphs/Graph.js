function Graph(value) {
  this.value = value;
  this.edges = [];
}

// creates another node (a node is another graph with its own value and edges) on the graph and adds it to the current edge
Graph.prototype.addNode = function(value) {
  // create new node
  node = new Graph(value);
  this.edges.push(node)
};

const graph = new Graph(0)
graph.addNode(3);
graph.addNode(5);
graph.addNode(6);
console.log(graph)


/*

Graph {
  value: 0,
  edges: [
    Graph { value: 3, edges: [] }, <-- this graph
    Graph { value: 5, edges: [] },
    Graph { value: 6, edges: [] }
  ]
}

 */

// NOTE - I think this only works on a Hub and spoke graph!! Not on any graph with more complicated structure///


// returns true if the value is contained in the set
Graph.prototype.contains = function(value, i = 0, currValue = this.value) {
    // if the currValue is equal to the passed value, return true
    if(currValue === value){
      return true;
    }
    // if the current node has edges
    if (this.edges[i] !== undefined) {
      // reset the currValue to the currNode's value
      currValue = this.edges[i].value;
      // increment "i"
      i++;
      // recursively call contains
      return this.contains(value, i, currValue);
      
    }
    // if the currNode's edges are fully explored return false
    if (this.edges[i] === undefined) {
      return false;
    }
};

console.log(graph.contains(7))

// removes a given value from the graph
Graph.prototype.remove = function(value) {

};
