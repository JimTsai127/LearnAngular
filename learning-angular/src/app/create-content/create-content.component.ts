import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Content} from "../helper-files/content-interface";

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent implements OnInit {

  @Output() newBookEvent = new EventEmitter<Content>();
  newBookItem: any;

  constructor() { }

  ngOnInit(): void {
  }

  addBook(id: string, author: string, imgUrl: string, type: string, title: string, body: string, tags: string) {
    let idNum = 0
    let validItem = true;

    let createBookPromise = new Promise((success, fail) => {
      let testPass = true;

      // Check if required fields are empty or couldn't parse id number
      if(author.length == 0 || title.length == 0 || body.length == 0 || !parseInt(id)) {
        testPass = false;
      } else {
        idNum = parseInt(id); // Convert to number
      }

      if(testPass) {
        success("Book addition was successful.");
      } else {
        fail("Book addition has failed");
      }
    })

    createBookPromise.then(function (successResult) {
      console.clear(); // Clear console if success
      console.log(successResult);
    }).catch(failResult => {
      validItem = false;
      console.log(failResult);
    })

    // If a valid item was entered, pass it to the event
    if(validItem) {
      this.newBookItem = {
        id: idNum,
        author: author,
        imgUrl: imgUrl,
        type: type,
        title: title,
        body: body,
        tags: tags.split(",")
      };
      this.newBookEvent.emit(this.newBookItem);
    }
  }
}
