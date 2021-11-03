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
  id: any;
  author: any;
  imgUrl: any;
  type: any;
  title: any;
  body: any;
  tags: any;
  msg: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  addBook() {
    let createBookPromise = new Promise((success, fail) => {
      // Check if required fields are empty or couldn't parse id number
      if(parseInt(this.id) && this.author && this.title && this.body) {
        this.newBookEvent.emit({
          id: parseInt(this.id),
          author: this.author,
          imgUrl: this.imgUrl,
          type: this.type,
          title: this.title,
          body: this.body,
          tags: this.tags.split(",")
        });
        success("Book addition was successful.");
      } else {
        fail("Book addition has failed");
      }
    })

    createBookPromise.then((successResult) => {
      this.msg = "";
      console.log(successResult)
    }).catch(failResult => {
      this.msg = failResult;
      console.log(failResult)
    })
  }
}
