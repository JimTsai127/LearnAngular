import {Component, OnInit} from '@angular/core';
import { Content } from "../helper-files/content-interface";
import {ContentService} from "../services/content.service";

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  contentArray: Content[] = []; // Holds an array of content items
  public item: any; // Stores the user's search item

  constructor(private contentService: ContentService) {
    this.item = "";
  }

  ngOnInit(): void {
    this.contentService.getContentObs().subscribe(
      contentArray => this.contentArray = contentArray
    );
  }

  // When user requests to find a book, highlight the book and show a message
  onFindItem(): void {
    // Find all the matching books
    if (this.item.toLowerCase().trim().length > 0) { // No empty strings allowed
      let bookMatches = this.contentArray.filter(book => book.title.toLowerCase().includes(this.item.toLowerCase().trim()))
      if (bookMatches.length > 0) { // Case where book(s) exists
        alert("Good news, book(s) containing " + '"' + this.item + '"' + " have been found")
      } else { // Case where book does not exist
        alert("Sorry, no book containing " + '"' + this.item + '"' + " could be found");
      }
    }
  }
}
