import { Injectable, Pipe } from '@angular/core';


@Pipe({
  name: 'secondsTominute'
})
@Injectable()
export class SecondsToMinute {
  /*
    Takes a value and makes it lowercase.
   */
  transform(value, args) {
    return Math.round(value % 3600 / 60);
  }
}
