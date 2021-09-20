import { Component, OnInit } from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {ContentList} from "../helper-files/content-list";

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {
  // New content list to store content
  contentList = new ContentList();

  constructor() { }

  ngOnInit(): void {
    // Create the contents
    let contentItem1: Content = {
      id: 0,
      author: 'Hung-Yu Tsai',
      imgUrl: "www.google.com",
      type: "type1",
      title: "title1",
      body: "body1",
      tags: ["tag1"]
    }
    let contentItem2: Content = {
      id: 1,
      author: 'Hung-Yu Tsai',
      imgUrl: "www.google.com",
      type: "type2",
      title: "title2",
      body: "body2",
      tags: ["tag2"]
    }
    let contentItem3: Content = {
      id: 2,
      author: 'Hung-Yu Tsai',
      imgUrl: "www.google.com",
      type: "type3",
      title: "title3",
      body: "body3",
      tags: ["tag3"]
    }

    // Add the contents to the list
    this.contentList.add(contentItem1);
    this.contentList.add(contentItem2);
    this.contentList.add(contentItem3);
  }

}
