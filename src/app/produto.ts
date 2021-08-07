export class Produto {
    lugar: string;
    email: string;
    valor: number;
    desconto: number;
    partida: string;
    

    constructor(lugar: string , email: string, valor: number, desconto: number, partida: string){
        this.lugar = lugar;
        this.email = email;
        this.valor = valor;
        this.desconto = desconto;
        this.partida = partida;
        
    }
}

