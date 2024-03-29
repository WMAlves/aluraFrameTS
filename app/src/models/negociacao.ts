import { Modelo } from "../interfaces/Modelo.js";


export class Negociacao  implements Modelo<Negociacao> {
    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) {}

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        const expressRegul = /-/g;
        const date = new Date(dataString.replace(expressRegul, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }

    get volume(): number {
        return this.quantidade * this.valor;
    }
    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    public paraTexto(): string {
        return `
            Data: ${this.data};
            Quantidade: ${this.quantidade};
            Valor: ${this.valor};
            Volume: ${this.volume};        
        `;
    }

    public ehIgual(negociacao:Negociacao):boolean{
        return this.data.getDate()==negociacao.data.getDate()
        && this.data.getMonth()==negociacao.data.getMonth()
        && this.data.getFullYear()==negociacao.data.getFullYear();
    }


}