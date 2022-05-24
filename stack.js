class Stack {
    constructor() {
        this.stack = [];
        this.tamanho = 0;
    }

    adicionarElemento(x) {
        this.stack.push(x);
        this.tamanho++;
    }

    removerElemento() {
        if (this.tamanho > 0) {
            const elemento = this.stack.pop();
            this.tamanho--;
            return elemento;
        } else {
            throw 'Stack vazia'
        }
    }

    getTamanho() {
        return this.tamanho;
    }
}

module.exports = Stack;