export class Negociacoes {
    constructor() {
        this.negociacoes = []; //informa array da classe negociação, outra forma de fazer isso é: "private negociacoes: Negociacao[]"
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao); //aqui está adicionando as negociações na lista.
    }
    lista() {
        return this.negociacoes;
    }
}
