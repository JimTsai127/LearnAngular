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
    let createBookPromise = new Promise((success, fail) => {
      let testPass = true;
      if(testPass) {
        success("Book addition was successful.");
      } else {
        fail("Book addition has failed");
      }
    })

    let asyncAddBook = async function () {

    }

    let idNum = parseInt(id); // Convert to number
    this.newBookItem = {
      id: idNum,
      author: author,
      imgUrl: imgUrl,
      type: type,
      title: title,
      body: body,
      tags: [tags]
    };
    this.newBookEvent.emit(this.newBookItem)
  }
}
