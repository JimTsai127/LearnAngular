import {Component, OnInit, Output, EventEmitter, Inject} from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {ContentService} from "../services/content.service";
import {MessageService} from "../message.service";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.scss']
})
export class CreateComponentComponent implements OnInit {

  @Output() newBookEvent = new EventEmitter<Content>();
  @Output() updateBookEvent = new EventEmitter<Content>();
  
  newBook: Content;
  msg: any;
  tempTags = "";
  tempId = "";

  constructor(private contentService: ContentService, private messageService: MessageService, public dialog: MatDialog) {
    this.newBook = {
      author: '',
      title: '',
      body: ''
    };
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateDialog, {
      height: '620px',
      width: '600px',
      data: {author: this.newBook.author, imgUrl: this.newBook.imgUrl, type: this.newBook.type, title: this.newBook.title, body: this.newBook.body, tags: this.newBook.tags}
    });

    dialogRef.afterClosed().subscribe(result => {
      // this.animal = result;
      this.add();
    });
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
    this.contentService.updateContent(this.newBook).subscribe(() => {
      this.messageService.add("Updated content at id: " + this.newBook.id);
      this.tempTags = "";
      this.tempId = "";
      this.updateBookEvent.emit(this.newBook);
      this.newBook = {
        author: '',
        title: '',
        body: ''
      }
    });
  }
}

@Component({
  selector: 'create-dialog',
  templateUrl: './create-dialog.html'
})
export class CreateDialog {
  newBook: Content;
  tempTags = "";
  tempId = "";

  constructor(
    public dialogRef: MatDialogRef<CreateDialog>,
              @Inject(MAT_DIALOG_DATA) public data: Content) {
    this.newBook = {
      author: '',
      title: '',
      body: ''
    };
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

