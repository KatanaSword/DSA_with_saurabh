// class BSTNode {
//     constructor(key) {
//       this.key = key;
//       this.left = null;
//       this.right = null;
//     }
//   }

const breadthFirstSearch = (root) => {
  if (root === null) {
    return; // return empty array or message
  }

  const value = [];
  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift(); // point of optimization
    value.push(node.key);

    if (node.left !== null) {
      value.push(node.left);
    }

    if (node.right !== null) {
      value.push(node.right);
    }
  }
  return value;
};
