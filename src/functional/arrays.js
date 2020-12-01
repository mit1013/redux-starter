const numbers = [1, 2, 3];

//adding
const index = numbers.indexOf(2);
const added = [...numbers.slice(0, index), 4, ...numbers.slice(index)];

//removing
const removed = numbers.filter((n) => n !== 2);

//updating e.g. replace 2 with 20
const updated = numbers.map((n) => (n === 2 ? 20 : n));

// ***Adding to end of array***
// Bad
this.state.arr.push("foo");
// Good
this.setState({
  arr: [...this.state.arr, "foo"],
});
// Adding to middle of an array
// Bad
this.state.arr[3] = "foo";
//Good
this.setState({
  arr: this.state.arr.map((item, index) => (index === 3 ? "foo" : item)),
});
// Array deletion
// Bad
this.state.arr.splice(2, 1);
// Good
this.setState({
  arr: this.state.arr.filter((item, index) => index !== 2),
});
