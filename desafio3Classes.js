let jogador = "Marina", "29", "mago"

class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = "Marina";
        this.idade = 29;
        this.tipo = "mago";
    }

    atacar() {
        let ataque = " ";
        
        switch (this.tipo) {
          case "mago":
            ataque = "usou magia";
            break;
          case "guerreiro":
            ataque = "usou espada";
            break;
          case "monge":
            ataque = "usou artes marciais";
            break;
          case "ninja":
            ataque = "usou shuriken";
            break;
          default:
            ataque = "usou um ataque genérico";
            break;
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}


