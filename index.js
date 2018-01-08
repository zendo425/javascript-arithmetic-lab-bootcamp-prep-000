 function add(a, b) {
   
  return a + b;
}

function subtract(a, b) {
   
  return a - b;
}

 function multiply(a, b){
    
    return a * b;
 }
 
 function divide(a, b){
    
    return a / b;
 }
 
var num = 25;
function inc(n){
n++;

return n;
}

var num = 25;
function dec(n){
n--;

return n;
}


function parsed(n, base) {
  var parsed = parseInt(n, 12);
  if (isNaN(parsed)) { return 0 }
  return parsed;
}