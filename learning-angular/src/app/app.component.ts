import {Component, Input, OnInit} from '@angular/core';
import {Content} from "./helper-files/content-interface";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  // Create the contents
  contentList: Content[] = [{
    id: 0,
    author: 'Hung-Yu Tsai',
    imgUrl: "www.google.com",
    type: "type1",
    title: "title1",
    body: "body1",
    tags: ["tag1", "tag2"],
  }, {
    id: 1,
    author: 'Hung-Yu Tsai',
    imgUrl: "www.google.com",
    type: "type2",
    title: "title2",
    body: "body2",
    tags: ["tag2"]
  }, {
    id: 2,
    author: 'Hung-Yu Tsai',
    imgUrl: "www.google.com",
    type: "type3",
    title: "title3",
    body: "body3",
    tags: ["tag3"]
  }];

  public ngOnInit(): void {
  }
}




