// You have to find the root whose key is largest smaller value than the key provided
function getLargestSmallerKey(key) {
  let result = -1;
  const currentNode = this.root;
  while (currentNode !== null) {
    if (currentNode.key > key) {
      currentNode = currentNode.left;
    } else {
      result = currentNode.key;
      currentNode = currentNode.right;
    }
  }
  return result;
}
