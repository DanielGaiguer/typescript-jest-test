describe('TESTANDO ALGUMA COISA ', () => {
    it('Should return one (IT)', () => {
        const number = 1;
        expect(number).toBe(1);
        //expect(number).not.toBe(1); // Nao seja 1
    });
});

describe('TESTANDO OUTRA COISA ', () => {
    test('should return Daniel (TESTE)', () => {
        const nome = 'Daniel';
        expect(nome).toBe('Daniel');
        //expect(nome).not.toBe('Gaiguer'); // Nao seja Gaiguer
    });
});
