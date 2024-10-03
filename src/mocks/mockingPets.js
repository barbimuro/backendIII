import { faker } from "@faker-js/faker";


export const createPets=(nPets)=>{

    const pets = [];

    for (let i = 0; i < nPets; i++) {

        const animal = faker.helpers.arrayElement([
            'bear', 'bird', 'fish', 'cow', 'cetacean', 'cat', 'crocodilia',
            'dog', 'horse', 'insect', 'lion', 'rabbit', 'rodent', 'snake'
        ]);

let specie = '';

switch (animal) {
  case 'cow':
  case 'cat':
  case 'dog':
  case 'horse':
  case 'rabbit':
    specie = 'domestico';
    break;
  
  case 'bear':
  case 'bird':
  case 'lion':
  case 'rodent':
  case 'crocodilia':
  case 'snake':
  case 'insect':
    specie = 'salvaje';
    break;
  
  case 'fish':
  case 'cetacean':
    specie = 'acuatico';
    break;
  
  default:
    specie = 'desconocido';
}

const pet = {
    name: animal,
    specie: specie,
    adopted: false,
    owner: null,
};

pets.push(pet);}

return pets;
}

