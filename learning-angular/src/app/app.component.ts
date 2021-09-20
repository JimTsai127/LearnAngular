import { Component } from '@angular/core';
import {MarvelHero} from "helper-files/MarvelHero";
import {ContentList} from "helper-files/ContentList";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learning-angular';
  static contentCount = 0;

  public ngOnInit(): void {

    let name: string;
    name = "Peter"
    console.log("Name is", name);

    let contentItem: MarvelHero = {
      id: 0,
      name: "Spiderman",
      imageURL: "https://angular.io/assets/images/logos/angular/angular.png",
      description: "Obviously the best Marvel hero"
    }
    this.processHero(contentItem);

    // ContentList.contentCount = 1;
    let list: ContentList;
    list = new ContentList(contentItem);
    list.items = [{
      id: 0,
      name: "Ironman",
      imageURL: "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
      description: "We will miss him"
    }];
    console.log("We changed the hero on the inside", list.items);
  }

  public processHero(hero: MarvelHero): void {
    console.log(hero.description);
  }
}




