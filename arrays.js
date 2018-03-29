var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var addElementToBeginningOfArray = function(array, element) {
  return [element, array.slice()];
}

var destructivelyAddElementToBeginningOfArray = function(array, element) {
  array.unshift(element);
  return array;
}

var addElementToEndOfArray = function(array, element) {
  return [array.slice(), element];
}

var destructivelyAddElementToEndOfArray = function(array, element) {
  array.push(element);
  return array;
}
