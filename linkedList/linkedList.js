// Linked List def:-
// Consider, Data as node
// Array as linked list

// Create Node

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// Create LinkedList

class LinkedList {
  constructor() {
    this.head = null;
  }
}

// Insert at a Beginning

LinkedList.prototype.insertAtBeginning = function (data) {
  // Convert into a node
  const newNode = new Node(data);
  // Add node to head
  this.head = newNode;
};

// Insert at a tail

LinkedList.prototype.insertAtTail = function (data) {
  // Convert into a node
  const newNode = new Node(data);
  // Check If head is null
  if (!this.head) {
    // if true add new node
    this.head = newNode;
    return;
  }
  // If head not null
  let last = this.head;
  while (last.next) {
    // If false move next
    last = last.next;
  }
  // If true add new node
  last.next = newNode;
};

// Insert at given node

LinkedList.prototype.insertAfter = function (prevNode, data) {
  // Check if prevNode is null
  if (!prevNode) {
    console.log("The given prev node can not be empty");
    return;
  }
  // Insert new node After prevNode and give nextNode pointer
  const newNode = new Node(data, prevNode.next);
  // prevNode next now point newNode
  prevNode.next = newNode;
};

// Delete first node

LinkedList.prototype.deleteFirstNode = function () {
  // Check if head is empty
  if (!this.head) {
    return;
  }

  // Point head to a next node and that become head now
  this.head = this.head.next;
};

// Delete last node (second last node)

LinkedList.prototype.deleteLastNode = function () {
  // Check if head is empty
  if (!this.head) {
    return; // Nothing to delete if list is empty
  }

  if (!this.head.next) {
    this.head = null;
    return; // If head is a only node in list
  }

  let secondLast = this.head;
  // If secondLast.next.next get value then sheft head to a next node
  while (secondLast.next.next) {
    secondLast = secondLast.next;
  }
  // secondLast.next.next get null
  secondLast.next = null;
};

// Delete node by key

LinkedList.prototype.deleteNodeByKey = function (key) {
  // If list is empty
  if (!this.head) {
    console.log("list is empty");
  }

  // data found at head
  if (this.head.data === key) {
    this.head = this.head.next; // head sheft to a next node
    return;
  }

  // find a key
  let current = this.head;
  while (current.next.data !== null) {
    if (current.next === key) {
      current.next = current.next.next;
      return;
    }
    current = current.next;
  }
};

// Search operation

LinkedList.prototype.search = function (key) {
  let current = this.head;
  while (current) {
    if (current.data === key) {
      return true;
    }
    current = current.next; // move to a next node
  }
  false;
};

// Traverse

LinkedList.prototype.traverse = function () {
  let current = this.head;
  let listValues = [];
  while (current) {
    listValues.push(current.data); // push data into array
    current = current.next; // move to next node
  }
  console.log(listValues.join(" -> "));
};

// Reverse list

LinkedList.prototype.reverse = function () {
  let current = this.head;
  let prev = null;
  let next = null;

  while (current) {
    next = current.next; // move next to a next node
    current.next = prev; // pointer next node to a prev node
    prev = current; // move prev node forward
    current = next; // move current node forward
  }
  this.head = prev; // point head to a last node
};
