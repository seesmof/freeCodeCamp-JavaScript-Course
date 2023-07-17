class Book {
  constructor(author) {
    this._author = author;
  }

  get writer() {
    return this._author;
  }

  set writer(author) {
    this._author = author;
  }
}

const novel = new Book("John Doe");
console.log(novel.writer);
novel.writer = "Jane Doe";
console.log(novel.writer);
