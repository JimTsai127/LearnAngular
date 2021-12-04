import { Component, OnInit } from '@angular/core';
import {LogUpdateService} from "./log-update.service";
import {ContentService} from "./services/content.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent implements OnInit {
  constructor(private contentService: ContentService, private logService: LogUpdateService) {
  }

  public ngOnInit(): void {
  }
}




