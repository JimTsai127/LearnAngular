import { Component, OnInit } from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {ActivatedRoute} from "@angular/router";
import {ContentService} from "../services/content.service";
import {LogUpdateService} from "../log-update.service";

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {

  id: number = 0;
  bookContent: any = {};

  constructor(private route: ActivatedRoute, private content: ContentService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      this.content.getContentItem(this.id).subscribe(book => this.bookContent = book);
    });
  }

}
