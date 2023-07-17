class Book {
  constructor(author) {
    this._author = author;
  }

  get witer() {
    return this._author;
  }

  set witer(author) {
    this._author = author;
  }
}

const novel = new Book("John Doe");
console.log(novel.witer);
novel.witer = "Jane Doe";
console.log(novel.witer);
