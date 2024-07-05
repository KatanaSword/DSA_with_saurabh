class Node {
  constructor(data, next = null, prevNode = null) {
    this.data = data;
    this.next = next;
    this.prevNode = prevNode;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}

// Insert at beginning

DoublyLinkedList.prototype.insertAtBeginning = function (data) {
  // Create a new node
  const newNode = new Node(data, this.head, null);
  // List is not empty
  if (this.head !== null) {
    this.head.prevNode = newNode; // insert new node in prevNode of head
  }
  this.head = newNode; // point head to a new node
  // tail is null
  if (!this.tail) {
    this.tail = newNode; // point tail to a new node
  }
};

// Insert at Ending

DoublyLinkedList.prototype.insertAtEnding = function (data) {
  // Create a new node
  const newNode = new Node(data, null, this.tail);
  // List is not empty
  if (this.tail !== null) {
    this.tail.next = newNode; // insert new node in next of tail
  }
  this.tail = newNode; // point tail to a new node
  // head is null
  if (!this.head) {
    this.head = newNode; // point head to a new node
  }
};

// Insert after a given node

DoublyLinkedList.prototype.insertAfterNode = function (data, prevNode) {
  // data is empty
  if (data === null) {
    console.log("Node is Invalid");
  }
  // Create new node
  const newNode = new Node(data, prevNode.next, prevNode);
  // next node is not null
  if (prevNode.next !== null) {
    prevNode.next.prev = newNode; // next node point to a new node
  }
  // point a prev node to a new node
  prevNode.next = newNode;
  // tail
  if (newNode.next === null) {
    this.tail = newNode; // point new node as a tail
  }
};

// Delete a first node

DoublyLinkedList.prototype.deleteFirstNode = function () {
  if (!this.head) {
    return; // Nothing to delete
  }

  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = this.head.next; // point head to a next node
    this.head.prev = null; // point new head prev to a null
  }
};

// Delete a last node

DoublyLinkedList.prototype.deleteLastNode = function () {
  if (!this.tail) {
    return; // Nothing to delete
  }

  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else {
    this.tail = this.tail.prev; // point tail to a prev node
    this.tail.next = null; // point new tail next to a null
  }
};

// Reverse a doubly linked list

DoublyLinkedList.prototype.reverse = function () {
  let current = this.head;
  let temp = null;

  while (current !== null) {
    // swapping
    temp = current.prev;
    current.prev = current.next;
    current.next = temp;
    // move to next node
    current = current.prev;
  }
  if (temp !== null) {
    this.tail = this.head;
    this.head = temp.prev;
  }
};
