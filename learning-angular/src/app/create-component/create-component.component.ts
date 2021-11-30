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
      data: this.newBook
    });

    dialogRef.afterClosed().subscribe(result => {
      if(isNaN(result.id)) { // No ID means add
        this.newBookEvent.emit(result);
      } else { // ID means user wants to update
        this.updateBookEvent.emit(result);
      }

      this.newBook = {
        author: '',
        title: '',
        body: ''
      };
    });
  }


}

@Component({
  selector: 'create-dialog',
  templateUrl: './create-dialog.html'
})
export class CreateDialog {
  tempTags = "";
  tempId = "";

  constructor(
    public dialogRef: MatDialogRef<CreateDialog>,
              @Inject(MAT_DIALOG_DATA) public data: Content, private contentService: ContentService, private messageService: MessageService) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  add(): void {
    this.data.tags = this.tempTags.split(",");
    this.contentService.addContent(this.data).subscribe(newBookItem => {
      this.messageService.add("Added content has an id of: " + newBookItem.id);
      this.data = {
        author: '',
        title: '',
        body: '',
      };
      this.tempTags = "";
    })
  }

  update(): void {
    this.data.tags = this.tempTags.split(",");
    this.data.id = parseInt(this.tempId);
    this.dialogRef.close(this.data);
    this.contentService.updateContent(this.data).subscribe(() => {
      this.messageService.add("Updated content at id: " + this.data.id);
      this.tempTags = "";
      this.tempId = "";

      this.data = {
        author: '',
        title: '',
        body: ''
      }
    });
  }
}

