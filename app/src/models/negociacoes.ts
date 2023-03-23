import { Modelo } from "../interfaces/Modelo.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Modelo<Negociacoes>{
 
    private negociacoes: Array<Negociacao> = []; //informa array da classe negociação, outra forma de fazer isso é: "private negociacoes: Negociacao[]"
    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);//aqui está adicionando as negociações na lista.
    }

    public lista(): ReadonlyArray<Negociacao> { //para deixar o array apenas para leitura, outra forma de fazer isso seria, "lista(): readonly Negociacao[]"
        return this.negociacoes;

    }

    public paraTexto():string {
        return (JSON.stringify(this.negociacoes, null, 2) );
    }

    public ehIgual(negociacoes: Negociacoes): boolean {
        return JSON.stringify(this.negociacoes)===JSON.stringify(negociacoes.lista());
    }

}

