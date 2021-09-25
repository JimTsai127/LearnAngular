import {Component, Input, OnInit} from '@angular/core';
import { Content } from "../helper-files/content-interface";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  // Holds an array of content items
  contentArray: Content[];


  constructor() {
    this.contentArray = [{
      id: 0,
      author: 'Cornelia Funke',
      imgUrl: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png",
      type: "Paperback",
      title: "The Thief Lord",
      body: "A good book",
      tags: ["fantasy", "young adult"]
    }, {
      id: 1,
      author: "J.K. Rowling",
      imgUrl: "",
      type: "Hardcover",
      title: "Harry Potter and the Deathly Hallows",
      body: "Sequel to the final book",
      tags: ["fantasy", "Part 2"]
    }, {
      id: 2,
      author: 'Lemony Snicket',
      imgUrl: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png",
      type: "Hardcover",
      title: "The Series of Unfortunate Events 13",
      body: "Last known book",
      tags: ["psychological"]
    }, {
      id: 3,
      author: 'Christopher Paolini',
      imgUrl: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png",
      type: "Paperback",
      title: "Eragon",
      body: "First book in the series",
      tags: ["fantasy"]
    }, {
      id: 4,
      author: "Cornelia Funke",
      imgUrl: "",
      type: "Hardcover",
      title: "Inkspell",
      body: "Good book",
      tags: ["fantasy", "magic"]
    }];
  }

  ngOnInit(): void {
  }

}
