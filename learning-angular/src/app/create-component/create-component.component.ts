import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Content} from "../helper-files/content-interface";

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.css']
})
export class CreateComponentComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    // Check if required fields are empty or couldn't parse id number
    if(this.author && this.title && this.body) {
      this.newBookEvent.emit({
        author: this.author,
        imgUrl: this.imgUrl,
        type: this.type,
        title: this.title,
        body: this.body,
        tags: this.tags.split(",")
      });
    }
  }
}
