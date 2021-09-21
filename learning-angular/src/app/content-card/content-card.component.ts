import {Component, Input, OnInit} from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {MarvelHero} from "../helper-files/MarvelHero";

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {
  @Input() content: MarvelHero;

  constructor() {
    this.content = {
      id: 0,
      name: "Spiderman",
      imageURL: "https://angular.io/assets/images/logos/angular/angular.png",
      description: "Obviously the best Marvel hero"
    }
  }

  // New content list to store content
  @Input() contentList: any;
  content1 = "";
  content2 = "";
  content3 = "";

  // Create the contents
  contentItem1: Content = {
    id: 0,
    author: 'Hung-Yu Tsai',
    imgUrl: "www.google.com",
    type: "type1",
    title: "title1",
    body: "body1",
    tags: ["tag1", "tag2"]
  }
  contentItem2: Content = {
    id: 1,
    author: 'Hung-Yu Tsai',
    imgUrl: "www.google.com",
    type: "type2",
    title: "title2",
    body: "body2",
    tags: ["tag2"]
  }
  contentItem3: Content = {
    id: 2,
    author: 'Hung-Yu Tsai',
    imgUrl: "www.google.com",
    type: "type3",
    title: "title3",
    body: "body3",
    tags: ["tag3"]
  }

  ngOnInit(): void {
    // Add the contents to the list
    this.contentList.add(this.contentItem1);
    this.contentList.add(this.contentItem2);
    this.contentList.add(this.contentItem3);

    this.content1 = this.contentList.formatted(0);
    this.content2 = this.contentList.formatted(1);
    this.content3 = this.contentList.formatted(2);
  }

}
