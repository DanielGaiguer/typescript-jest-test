import {
  IndividualCustomerProtocol,
  EnterpriseCostumerProtocol,
  CustomerOrder,
} from './interfaces/costumer-protocol';

export class IndividualCostumer
  implements IndividualCustomerProtocol, CustomerOrder
{
  firstName: string;
  lastName: string;
  cpf: string;

  constructor(firstName: string, lastName: string, cpf: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf;
  }

  getName(): string {
    return this.firstName + this.lastName;
  }

  getIDN(): string {
    return this.cpf;
  }
}

export class EnterpriseCostumer
  implements EnterpriseCostumerProtocol, CustomerOrder
{
  name: string;
  cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  getName(): string {
    return this.name;
  }

  getIDN(): string {
    return this.cnpj;
  }
}
