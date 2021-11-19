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
  tempTags = "";
  tempId = "";

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
    // Check if required fields are empty
    if(this.newBook.author && this.newBook.title && this.newBook.body) {
      this.newBook.tags = this.tempTags.split(",");
      this.contentService.addContent(this.newBook).subscribe(newBookItem => {
        this.messageService.add("Added content has an id of: " + newBookItem.id);
        this.newBookEvent.emit(this.newBook);
      })
    }
  }

  update(): void {
    this.newBook.tags = this.tempTags.split(",");
    this.newBook.id = parseInt(this.tempId);
    this.contentService.addContent(this.newBook).subscribe(() => {
      this.messageService.add("Updated content at id: " + this.newBook.id);
      this.updateBookEvent.emit(this.newBook);
    });
  }
}
