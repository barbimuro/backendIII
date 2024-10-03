import { faker } from "@faker-js/faker";

import { createHash } from "../utils/index.js";
import config from "../config/config.js";

export const createUsers = async (nUsers) =>{

    const users = []
    
    for (let i = 0; i < nUsers; i++){  
        const hashedPassword =  await createHash(config.users.PASSWORD)
        const user ={
            first_name: faker.person.firstName(),
            last_name: faker.person.lastName(),
            email: faker.internet.email(),
            password: hashedPassword,
            role: faker.helpers.arrayElement(['user', 'admin'])
        }
       
        users.push(user)
   }
   return users;
   
}