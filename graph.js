class Graph {
  constructor() {
    this.graph = {};
  }

  addEdges(vertices, edge) {
    if (!this.graph[vertices]) {
      this.graph[vertices] = [];
    }

    this.graph[vertices].push(edge);
  }

  BFS(start) {
    let visited = new Set();
    let queue = [];

    visited.add(start);
    queue.push(start);

    while (queue.length != 0) {
      let node = queue.shift();
      console.log(node);

      if (this.graph[node]) {
        for (let value of this.graph[node]) {
          if (!visited.has(value)) {
            queue.push(value);
            visited.add(value);
          }
        }
      }
    }
  }

  DFS(start) {
    let visited = new Set();
      let stack = [];
      
      visited.add(start)
      stack.push(start)

      while (stack.length != 0) {
          let node = stack.pop()
          console.log(node)
              
        
          if (this.graph[node]) {
              for (let value of this.graph[node]) {
                  if (!visited.has(value)) {
                      stack.push(value)
                      visited.add(value)
                  }
              }
          }
          
      }
  }
}


let g = new Graph()

g.addEdges(0, 1)
g.addEdges(0, 2)
g.addEdges(2, 3)
g.addEdges(2, 4)
g.addEdges(1, 5)
g.addEdges(1, 6)
g.DFS(0)