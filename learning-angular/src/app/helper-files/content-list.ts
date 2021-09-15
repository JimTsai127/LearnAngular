import {Content} from "./content-interface";

export class ContentList {
  private _content: Content[];

  // Constructor for content
  constructor() {
    this._content = [] // Initialize the array
  }

  // Getter for content
  get items(): Content[] {
    return this._content;
  }

  // Adds an item to the lsit of content
  public add(item: Content) {
    this._content.push(item);
  }

  // Counts the number of items in content
  public count(): number {
    return this._content.length;
  }

  // Neatly formats and displays all the array contents
  public formatted(index: number): string {
    // Check for valid index
    if(index > -1 && index < this._content.length) {
      let id = "ID: " + this._content[index].id;
      let author = "Author: " + this._content[index].author;
      let imgUrl = "Image: " + this._content[index].imgUrl;
      let type = "Type: " + this._content[index].type;
      let title = "Title: " + this._content[index].title;
      let body = "Body: " + this._content[index].body;
      let tags = "Tags: " + this._content[index].tags;

      return "<span [innerHTML]='id'></span>" +
        "<span [innerHTML]='author'></span>" +
        "<span [innerHTML]='imgUrl'></span>" +
        "<span [innerHTML]='type'></span>" +
        "<span [innerHTML]='title'></span>" +
        "<span [innerHTML]='body'></span>" +
        "<span [innerHTML]='tags'></span>"
    } else {
      return "<p>Error: Content index not found.</p>"
    }
  }
}
