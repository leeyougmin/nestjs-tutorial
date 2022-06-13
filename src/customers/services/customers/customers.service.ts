import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      idx: 1,
      email: 'minidragon.lee@gmail.com',
      name: 'minidragon',
    },
    {
      idx: 2,
      email: 'gom.park@gmail.com',
      name: 'gom',
    },
    {
      idx: 3,
      email: 'grady.kang@gmail.com',
      name: 'grady',
    },
  ];

  findCustomer() {
    return {
      idx: 1,
      email: 'minidragon.lee@gmail.com',
    };
  }

  findCustomerByIdx(idx: number) {
    return this.customers.find((user) => user.idx === idx);
  }

  findCustomers() {
    return this.customers;
  }

  createCustomer(createCustomerDto: CreateCustomerDto) {
    createCustomerDto.idx = this.customers.length + 1;
    this.customers.push(createCustomerDto);
  }
}
