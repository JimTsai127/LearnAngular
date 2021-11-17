import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {ContentService} from "../services/content.service";
import {MessageService} from "../message.service";

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.css']
})
export class CreateComponentComponent implements OnInit {

  @Output() newBookEvent = new EventEmitter<Content>();
  @Output() updateBookEvent = new EventEmitter<Content>();

  newBook: Content;
  msg: any;

  constructor(private contentService: ContentService, private messageService: MessageService) {
    this.newBook = {
      author: '',
      title: '',
      body: ''
    };
  }

  ngOnInit(): void {
  }

  add(): void {
    // Check if required fields are empty or couldn't parse id number
    if(this.newBook.author && this.newBook.title && this.newBook.body) {
      this.contentService.addContent(this.newBook).subscribe(newBookItem => {
        this.messageService.add("Added content has an id of: " + newBookItem.id);
        this.newBookEvent.emit(this.newBook);
      })
    }
  }
}
