import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(customersData: any, field: string): any {
    console.log(customersData);
    if (customersData && customersData.length > 0) {
      console.log('field', field);
      return;
    }
    customersData.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
    return customersData;
  }
  // transform(customersData: Array<any>, args?: any): any {
  //   if (customersData && customersData.length > 0) {
  //     console.log(args);
  //     return customersData.sort(function(a, b) {
  //       if (a[args] < b[args]) {
  //         return -1 * args.direction;
  //       } else if (a[args] > b[args]) {
  //         return 1 * args.direction;
  //       } else {
  //         return 0;
  //       }
  //     });
  //   }
  // }
}
