import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tax'
})
export class TaxPipe implements PipeTransform {

  transform(value: number, args?: number): number {
    var taxPercentage:number=18; // Adım 2
    if(args){
      taxPercentage = args;
    }
    return value +(value/100*taxPercentage);
  }

}
