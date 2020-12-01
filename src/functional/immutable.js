import { Map } from "immutable";

let book = Map({ title: "Harry Potter" });

function publish(book) {
  return book.set("isPublished", true);
}

book = publish(book); //return new instance

console.log(book.toJS()); //to return classic js object

// better solution to below
// as this would mutate object

// let book = { title: "Harry Potter"};

// function publish(book) {
//     book.isPublished = true;
// }

// publish(book);
