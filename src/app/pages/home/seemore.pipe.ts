import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seemore'
})
export class SeemorePipe implements PipeTransform {

  transform(words:string , limit:number): string {
    return words.substring(0,limit) + ' ...';


  }

}
