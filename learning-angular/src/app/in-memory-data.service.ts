import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from "rxjs";
import { CONTENT } from "./helper-files/contentDb";
import {Content} from "./helper-files/content-interface";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const content: Content[] = CONTENT;

    return { content };
  }

  genId(content: Content[]): number {
    return content.length > 0 ? Math.max(...content.map(c =>
      c.id ?? 0)) + 1 : 0;
  }
}
