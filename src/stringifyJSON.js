// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  

  // test for array
  if (Array.isArray(obj)) {
    var result = '[';
    obj.forEach(function (value) {
      result += stringifyJSON(value) + ',';
    });
    if (result.length > 1) {
      result = result.slice(0, result.length - 1);
    }
    result += ']';
    return result;
  }

  // test for object
  if (typeof obj === 'object' && obj !== null) {
    var result = [];
    for (var key in obj) {
      // test for unstringifiable values (undef, funcs)
      if (obj[key] === undefined || typeof obj[key] === 'function') {
        continue;
      }
      result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
    return '{' + result.join(',') + '}';
    
  }

  // test for strings
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  // test for primitives = bool, str, num
  return '' + obj;
};
