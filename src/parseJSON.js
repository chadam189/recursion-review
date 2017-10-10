// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  var currentChar = 0;
  if (json.charAt(currentChar) === '[') {
    var arr = [];
    currentChar++;
    if (json.charAt(currentChar) === ']') {
      return arr; 
    } 
    if (json.charAt(currentChar) === '[') {
      // nested array
      var arrayClose = json.lastIndexOf(']', currentChar + 1);
      arr.push(parseJSON(json.slice(currentChar, arrayClose))); 
    }
    do {
    // else -> do while loop? 
      // determine what type the next value is
      while (json.charAt(currentChar) === ' ') {
        currentChar++;
      }
        
      // if string
      if (json.charAt(currentChar) === '"') {
        var idx = json.indexOf('"', currentChar + 1);
        var str = '' + json.slice(currentChar + 1, idx);
        currentChar = idx + 1;
        arr.push(str);
      } else if (json.charAt(currentChar) === 'n') {
        arr.push(null);
        currentChar += 4;
      } else if (json.charAt(currentChar) === 'f') {
        arr.push(false);
        currentChar += 5;
      } else if (json.charAt(currentChar) === 't') {
        arr.push(true);
        currentChar += 4;
      } else if (json.charAt(currentChar) !== '[') {
      // else if number
          // var numIndex = json.indexOf(',', currentChar + 1) === -1 ? json.indexOf(']'), currentChar + 1 : json.indexOf(',', currentChar + 1);
        var numIndex = json.indexOf(',', currentChar + 1);
        if (numIndex === -1) {
          numIndex = json.indexOf(']');
        }
        var test = Number(json.slice(currentChar, numIndex));
        arr.push(test);
        currentChar = numIndex;
      }
      currentChar++;
      // what do we look for to determine 
    } while (json.charAt(currentChar - 1) === ',');
    return arr;
  }    
};