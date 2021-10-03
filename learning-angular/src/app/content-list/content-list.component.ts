import {Component, OnInit} from '@angular/core';
import { Content } from "../helper-files/content-interface";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  contentArray: Content[]; // Holds an array of content items
  public item: any; // Stores the user's search item

  constructor() {
    this.item = "";

    // List of books
    this.contentArray = [{
      id: 0,
      author: 'Cornelia Funke',
      imgUrl: "https://upload.wikimedia.org/wikipedia/en/6/60/Thieflordbookcover.jpg",
      type: "Paperback",
      title: "The Thief Lord",
      body: "A good book",
      tags: ["fantasy", "young adult"],
    }, {
      id: 1,
      author: "J.K. Rowling",
      imgUrl: "https://upload.wikimedia.org/wikipedia/en/a/a9/Harry_Potter_and_the_Deathly_Hallows.jpg",
      type: "Hardcover",
      title: "Harry Potter and the Deathly Hallows",
      body: "Final book in the series",
      tags: ["fantasy"],
    }, {
      id: 2,
      author: 'Lemony Snicket',
      type: "Hardcover",
      title: "The Series of Unfortunate Events 13",
      body: "Last known book",
      tags: ["psychological"],
    }, {
      id: 3,
      author: 'Christopher Paolini',
      imgUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Eragon_book_cover.png/200px-Eragon_book_cover.png",
      type: "Paperback",
      title: "Eragon",
      body: "First book in the series",
      tags: ["fantasy"],
    }, {
      id: 4,
      author: "Cornelia Funke",
      imgUrl: "https://images-na.ssl-images-amazon.com/images/I/81ftas+eTwL.jpg",
      type: "Hardcover",
      title: "Inkspell",
      body: "Good book",
      tags: ["fantasy", "magic"],
    }, {
      id: 5,
      author: "Unknown",
      title: "Test Book",
      body: "No image, tags or type",
    }];
  }

  ngOnInit(): void {
  }

  // When user requests to find a book, highlight the book and show a message
  onFindItem(): void {
    // Case where book exists
    if (this.contentArray.find(book => book.title.toLowerCase() === this.item.toLowerCase().trim())) {
      alert("Good news, the book called " + '"' + this.item + '"' + " has been found")
    } else { // Case where book does not exist
      alert("Sorry, the book called " + '"' + this.item + '"' + " could not be found");
    }
  }
}
