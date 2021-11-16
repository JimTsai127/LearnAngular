import { Injectable } from '@angular/core';
import {Content} from "../helper-files/content-interface";
import {Observable, of} from "rxjs";
import { MessageService } from "../message.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getContent(): Observable<Content[]> {
    return this.http.get<Content[]>("api/content");
  }

  addContent(content: Content): Observable<Content> {
    var observableContent = this.http.post<Content>("api/content", content, this.httpOptions);
    this.messageService.add('Content added!');
    return observableContent
  }
}
