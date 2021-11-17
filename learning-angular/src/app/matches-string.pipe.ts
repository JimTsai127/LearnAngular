import { Pipe, PipeTransform } from '@angular/core';
import {Content} from "./helper-files/content-interface";

@Pipe({
  name: 'matchesString'
})
export class MatchesStringPipe implements PipeTransform {

  transform(contentList: Content[], matchString: string): Content[] {
      // Return a list of contents that matches the given string
      return contentList.filter(c => {
        if(c) {
          return c.type == (matchString);
        } else {
          return false;
        }
      });
  }
}
