import {Component, Input, OnInit} from '@angular/core';
import {Content} from "../helper-files/content-interface";

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {
  @Input() content: any;
  // Create the contents
  newContent = {
    id: 0,
    author: 'Dragon Force',
    imgUrl: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png",
    type: "power metal",
    title: "Through the Fire and the Flames",
    body: "A legendary song with too many solos",
    tags: ["gh3", "double solos", "epic"]
  }
  newContent1 = {
    id: 1,
    author: "metallica",
    imgUrl: "",
    type: "something",
    title: "Enter the Sandman",
    body: "placeholder",
    tags: ["good"]
  }
  newContent2 = {
    id: 2,
    author: 'Ed Sheeran',
    imgUrl: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png",
    type: "type3",
    title: "title3",
    body: "body3",
    tags: ["tag3"]
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
