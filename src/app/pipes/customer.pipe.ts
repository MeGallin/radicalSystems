import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customerFilter',
  pure: false
})
export class CustomerPipe implements PipeTransform {
  transform(customersData: any, searchTerm: string): any {
    if (!customersData || searchTerm === undefined) {
      return customersData;
    }

    return customersData.filter(customer =>
      customer.fullname.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
