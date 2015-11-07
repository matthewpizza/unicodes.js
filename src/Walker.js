// Walk the DOM and find text nodes.
//
// Borrowed from https://github.com/panicsteve/cloud-to-butt/
function Walker(node, callback) {
  var child, next;

  switch (node.nodeType) {
    case 1:  // Element
    case 9:  // Document
    case 11: // Document fragment
      child = node.firstChild;
      while (child) {
        next = child.nextSibling;
        Walker(child, callback);
        child = next;
      }
      break;

    case 3: // Text node
      callback(node);
      break;
  }
}

module.exports = Walker;
