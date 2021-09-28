import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {
  constructor() {
  }

  // New content list to store content
  @Input() content: any;

  ngOnInit(): void {
  }

}
