function Animal(name){
    this.name = name

    this.makeSound = function(){
        throw new Error('o método makeSound deve ser implementado pelas subclasses')
    }
}


function Cachorro(name){
    Animal.call(this, name);

    this.makeSound = function(){
        return 'Au Au'
    }
}

function Gato(name){
    Animal.call(this, name);

    this.makeSound =  function(){
        return 'Miau'
    }
}

function Calopsita(name){
    Animal.call(this, name);

    this.makeSound = function(){
        return 'assobia a melodia de Harry Potter'
    }
}

const cachorro = new Cachorro('Teddy');
const gato = new Gato('Naninho');
const calopsita = new Calopsita('Frederico');

console.log(`${cachorro.name} faz ` + cachorro.makeSound());
console.log(`${gato.name} faz ` + gato.makeSound());
console.log(`${calopsita.name} faz ` + calopsita.makeSound());