//Currying - to reduce to 1 argument

function add0(a, b) {
  return a + b;
}

//becomes
function add(a) {
  return function (b) {
    return a + b;
  };
}

//or as arrow
const add2 = (a) => (b) => a + b;

//call by
add(1), 5; //same as add(1,5)
