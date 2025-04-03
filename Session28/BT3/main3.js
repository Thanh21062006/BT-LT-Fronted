const book = new Object();
book.title = "JavaScript Basics";
book.author = "John Smith";
book.page = 200;

for (const name in book) {
    console.log(`${name}: ${book[name]}`);
}

console.log("================================");
delete book.page;

for (const name in book) {
    console.log(`${name}: ${book[name]}`);
}