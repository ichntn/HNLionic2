import { Injectable, Pipe } from '@angular/core';

/*
  Generated class for the FeetToMile pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'feetTomile'
})
@Injectable()
export class FeetToMile {
  /*
    Takes a value and makes it lowercase.
   */
  transform(value, args) {
    
    return  value / 5280;
  }
}
