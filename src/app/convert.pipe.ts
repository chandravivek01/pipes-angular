import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: number | undefined, targetUnits : string): any {

    if ( !value ) 
      return '';

    switch ( targetUnits ) {

      case 'km' :
        return value * 1.609;
      
      case 'm' :
        return value * 1.609 * 1000;
      
      default :
        throw new Error('target unit not supported');
    }
  }

}
