import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = []; //informa array da classe negociação, outra forma de fazer isso é: "private negociacoes: Negociacao[]"
    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    lista(): ReadonlyArray<Negociacao> { //para deixar o array apenas para leitura, outra forma de fazer isso seria, "lista(): readonly Negociacao[]"
        return this.negociacoes;
        
    }
}

