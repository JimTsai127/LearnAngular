import {MarvelHero} from "./MarvelHero";

export class ContentList {
  static contentCount = 0;
  // private _items: MarvelHero[];
  _items: MarvelHero[];
  constructor(item: MarvelHero) {
    this._items = []; // initialize array
    this._items[0] = item;
    this.increaseCount();
  }
  get items(): MarvelHero[] {
    return this._items;
  }
  set items(newItems: MarvelHero[]) {
    this._items.push(newItems);
  }
  public increaseCount() {
    return ++ContentList.contentCount;
  }
}
