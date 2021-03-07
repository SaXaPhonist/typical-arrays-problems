
exports.min = function min (array) {
  if(array === undefined){return 0}else if(array.length === 0){return 0}
    else{
  array.sort((a,b) => (a-b));
  return array[0];}
}

exports.max = function max (array) {
  if(array === undefined){return 0}else if(array.length === 0){return 0} else {
    array.sort((a,b) => (b-a));
    return array[0];}
}

exports.avg = function avg (array) { 
 if (array === undefined){return 0}else if(array.length === 0){return 0}else{
  var sum = array.reduce((a,b) => a+b,0);
  return sum/array.length}
}
