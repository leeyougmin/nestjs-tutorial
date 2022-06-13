import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Res,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CustomersService } from 'src/customers/services/customers/customers.service';
import { CreateCustomerDto } from '../../dtos/CreateCustomer.dto';

@Controller('/customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}
  @Get('/:idx')
  getCustomer(
    @Param('idx', ParseIntPipe) idx: number,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const customers = this.customersService.findCustomerByIdx(idx);
    if (customers) {
      res.send(customers);
    } else {
      res.status(400).send({ msg: 'Customer not found!' });
    }
  }

  @Get('/search/:id')
  searchCustomerById(@Param('id', ParseIntPipe) idx: number) {
    const customers = this.customersService.findCustomerByIdx(idx);
    if (customers) return customers;
    else throw new HttpException('Customer not found!', HttpStatus.BAD_REQUEST);
  }

  @Get()
  searchCustomers() {
    return this.customersService.findCustomers();
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customersService.createCustomer(createCustomerDto);
  }
}
