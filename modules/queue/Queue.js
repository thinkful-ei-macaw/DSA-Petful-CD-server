class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);
    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;
    }
    this.last = node;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }

  show() {
    return this.first;
  }

  all() {
    if (this.first === null) {
      return 'Queue is empty';
    }
  
    let node = this.first;
    let previousNode = null;
  
    let queueItems = []

    while (node.next !== null) {
      previousNode = node.value;
      node = node.next;
      queueItems.push(previousNode);
    }
    
    queueItems.push(node.value);
    
    return queueItems;
  }
}

module.exports = Queue;
