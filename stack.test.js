const Stack = require('./stack');
let stack;

beforeEach(() => {
    stack = new Stack();
})

test('stack should be empty', () => {
    expect(stack.getTamanho()).toBe(0);
})

test('stack should have one element', () => {
    stack.adicionarElemento(2);
    expect(stack.getTamanho()).toBe(1);
})

test('stack should have one element removed', () => {
    stack.adicionarElemento(2);
    stack.adicionarElemento(3);
    stack.removerElemento();
    expect(stack.getTamanho()).toBe(1);
})

test('stack should throw an error when popping empty stack', () => {
    expect(() => {
        stack.removerElemento();
    }).toThrow();
})