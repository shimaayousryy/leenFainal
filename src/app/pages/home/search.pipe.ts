import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(product:any[] , term:string): any {
  if(term == undefined){
    return product;
  }
  return product.filter(product =>{
    if(  product.price.toLowerCase().includes(term.toLowerCase())){
      return product.price.toLowerCase().includes(term.toLowerCase())


    }else{
      return product.en_item_name.toLowerCase().includes(term.toLowerCase())

    }
   
  })
  }

}
