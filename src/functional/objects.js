// Key insertion
// Bad
this.state.obj.key = "bar";
// Good
this.setState({
  obj: {
    ...this.state.obj,
    key: "bar",
  },
});
// Key deletion
// Bad
delete this.state.obj.key;
// Good
const { key, ...newObj } = this.state.obj;
this.setState({
  obj: newObj,
});
