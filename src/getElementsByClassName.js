// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node
) {
  // your code here
  if (arguments.length === 1) {
    node = document.body;
  }
  
  var results = [];  

  if (node.classList.contains(className)) {
    results.push(node);
  }

  // if node has children
  if (node.childNodes) {
    
  // traverse children with a recursive call for each one
    for (var i = 0; i < node.children.length; i++) {
      results = results.concat(getElementsByClassName(className, node.children[i]));
    }
  // push each return of those recursive calls onto results 
  }

  return results;
};
