import { faker } from "@faker-js/faker";
import { createHash } from "../utils/index.js";
import bcrypt from "bcrypt";

class MockingService {
    static async generateMockingUsers(num){
        const users = [];

        for (let i = 0; i < num; i++){
            users.push({
                first_name: faker.person.firstName(),
                last_name: faker.person.lastName(),
                email: faker.internet.email(),
                //password: bcrypt.hashSync("coder123",10),
                password: await createHash("coder123"),
                role: faker.helpers.arrayElement(['user', 'admin']),
                pets: []
            });
        }

        return users;
    }

    static async generateMockingPets(num){
        const pets = [];

        for (let i = 0; i < num; i++){
            pets.push({
                name: faker.animal.dog(),
                specie: faker.animal.type(),
                adopted: false
            })
        }

        return pets;
    }
}

export default MockingService;