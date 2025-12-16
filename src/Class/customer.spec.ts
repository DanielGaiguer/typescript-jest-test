import { EnterpriseCostumer, IndividualCostumer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCostumer => {
  return new IndividualCostumer(firstName, lastName, cpf);
};

const createEnterpriseCostumer = (
  name: string,
  cnpj: string,
): EnterpriseCostumer => {
  return new EnterpriseCostumer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCostumer', () => {
  it('should have firstName, lastName and cpf', () => {
    const sut = createIndividualCustomer('Daniel', 'Gaiguer', '111.111.111-11');
    expect(sut).toHaveProperty('firstName', 'Daniel');
    expect(sut).toHaveProperty('lastName', 'Gaiguer');
    expect(sut).toHaveProperty('cpf', '111.111.111-11');
  });

  it('should have methods to get name and idn for Individual Costumers', () => {
    const sut = createIndividualCustomer('Daniel', 'Gaiguer', '111.111.111-11');
    expect(sut.getName()).toBe('DanielGaiguer');
    expect(sut.getIDN()).toBe('111.111.111-11');
  });
});

describe('EnterpriseCostumer', () => {
  it('should have name, cnpj', () => {
    const sut = createEnterpriseCostumer('Udemy', '222');
    expect(sut).toHaveProperty('name', 'Udemy');
    expect(sut).toHaveProperty('cnpj', '222');
  });

  it('should have methods to get name and idn for Enterprise Costumers', () => {
    const sut = createEnterpriseCostumer('Udemy', '222');
    expect(sut.getName()).toBe('Udemy');
    expect(sut.getIDN()).toBe('222');
  });
});
