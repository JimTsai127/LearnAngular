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

  // Adds an item to the list of content
  add(item: Content): void {
    this._content.push(item);
  }

  // Counts the number of items in content
  count(): number {
    return this._content.length;
  }

  // Neatly formats and displays all the array contents
  public formatted(index: number): string {
    // Check for valid index
    if(index > -1 && index < this._content.length) {
      let id = "<div>ID: " + this._content[index].id + "</div>";
      let author = "<div>Author: " + this._content[index].author + "</div>";
      let title = "<div>Title: " + this._content[index].title + "</div>";
      let body = "<div>Body: " + this._content[index].body + "</div>";
      let imgUrl = ""
      let type = "";
      let tags = "";
      if(this._content[index].imgUrl) {
        imgUrl = "<div><img src='" + this._content[index].imgUrl + "'></div>";
      }
      if(this._content[index].type) {
        type = "<div>" + this._content[index].type + "</div>";
      }
      if(this._content[index].tags) {
        // for(let i=0; i < this._content[index].tags.length; i++) {
          tags = "<div>" + this._content[index].tags + "</div>";
        // }
      }

      return id + "<br>" +
        author + "<br>" +
        imgUrl + "<br>" +
        type + "<br>" +
        title + "<br>" +
        body + "<br>" +
        tags + "<br>"

    } else {
      return "<div>Error: Content index not found.</div>"
    }
  }
}
