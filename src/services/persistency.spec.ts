import { Persistency } from './persistency';

describe('Persistency', () => {
  afterEach(() => jest.clearAllMocks());

  it('should return undefined', () => {
    // System under test
    const sut = new Persistency(); // SUT é a classe princípal que está sendo testada
    expect(sut.saveOrder()).toBeUndefined();
  });

  it('should call console.log once', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder(); //Precisa executar o metodo pro console.log ser chamado
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call console.log once', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder(); //Precisa executar o metodo pro console.log ser chamado
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });
});
