import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = []; //informa array da classe negociação, outra forma de fazer isso é: "private negociacoes: Negociacao[]"
    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);//aqui está adicionando as negociações na lista.
    }

    public lista(): ReadonlyArray<Negociacao> { //para deixar o array apenas para leitura, outra forma de fazer isso seria, "lista(): readonly Negociacao[]"
        return this.negociacoes;

    }
}

