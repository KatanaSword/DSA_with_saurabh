class BSTNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insertion

  insert(key) {
    const newNode = new BSTNode(key);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  // node -> root
  insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // Deletion

  delete(key) {
    this.root = this.deleteNode(this.root, key); // change root node every time function call
  }
  // node -> root
  deleteNode(node, key) {
    if (node === null) {
      return null;
    }

    if (key < node.key) {
      node.left = this.deleteNode(node.left, key);
    } else if (key > node.key) {
      node.right = this.deleteNode(node.right, key);
    } else {
      if (node.left === null && node.right === null) {
        return null; // remove root node and replace with null
      } else if (node.left === null) {
        return node.right; // remove root node and replace with right node
      } else if (node.right === null) {
        return node.left; // remove root node and replace with left node
      } else {
        let tempNode = this.findMinNode(node.right); // find node in right
        node.key = tempNode.key; // replace root node with smallest node
        node.right = this.deleteNode(node.right, tempNode.key); // remove smallest node
      }
    }
    return node;
  }
  // Find smallest node
  findMinNode(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  // IN-Order Traversal

  inOrderTraversal() {
    let result = [];
    this.inOrder(this.root, result);
    return result;
  }

  inOrder() {
    if (node !== null) {
      this.inOrder(node.left, result);
      result.push(node.key);
      this.inOrder(node.right, result);
    }
  }

  // PRE-Order Traversal

  preOrderTraversal() {
    let result = [];
    this.preOrder(this.root, result);
    return result;
  }

  preOrder() {
    if (node !== null) {
      result.push(node.key);
      this.preOrder(node.left, result);
      this.preOrder(node.right, result);
    }
  }

  // POST-Order Traversal

  postOrderTraversal() {
    let result = [];
    this.postOrder(this.root, result);
    return result;
  }

  postOrder() {
    if (node !== null) {
      this.postOrder(node.left, result);
      this.postOrder(node.right, result);
      result.push(node.key);
    }
  }
}
