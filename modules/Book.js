// book class with the determining 3 pararmeters which is the property of any book variable
export default class Book {
  constructor(title, author, id = null) {
    this.title = title;
    this.author = author;
    this.id = id;
  }
}