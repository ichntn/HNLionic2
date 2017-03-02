import { Injectable, Pipe } from '@angular/core';


@Pipe({
  name: 'ampmformatter'
})
@Injectable()
export class AMPMFormatter {
  /*
    Takes a value and makes it lowercase.
   */
  transform(value, args) {
    var hours = value.split(':')[0];
    var minutes = value.split(':')[1];
    var ampm = hours >= 12 ? 'PM' : 'AM';
    return hours + ':' + minutes + ' ' + ampm;;
  }
}
