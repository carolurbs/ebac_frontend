
function Personagem(nome,raça){
    this.nome=nome;
    this.raça=raça;
    this.atacar=function(){
        console.log('ataque');
    }

}

function Mago(nome, raça,magias){
    this.magias=magias;
    Personagem.call(this, nome, raça);
}

function Ladino(nome, raça,manobras){
    this.manobras=manobras;
    Personagem.call(this, nome, raça);
}

const magodeAmanda= new Mago("Maria", "Elfo","[Bola de Fogo, Globo de Luz]");
const LadinodeJosé= new Ladino("Cléber", "Humano","[Ataque Furtivo, Alquimia]");
const LadinodeJoana= new Ladino("Ana", "Halfling","[Ilusão, Invisibilidade]");
