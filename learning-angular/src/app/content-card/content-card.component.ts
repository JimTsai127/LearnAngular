import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {
  // Content card holds the content
  @Input() content: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  // When image is clicked, display its ID to the console
  onImageClick(): void {
    console.log(this.content.id);
  }
}
