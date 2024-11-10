import chai from 'chai';
import supertest from 'supertest';

const expect = chai.expect;
const requester = supertest('http://localhost:8080'); // Cambia el puerto si es necesario

describe('AdoptMe API Tests', () => {
    // Tests de adopciones
    describe('Adoptions Endpoints', () => {
        it('GET /adoptions - Debería obtener todas las adopciones', async () => {
            const response = await requester.get('/api/adoptions/');
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property('status', 'success');
            expect(response.body.payload).to.be.an('array');
        });
        /*
        it('POST /adoptions/:uid/:pid - Debería crear una nueva adopción', async () => {
            const userId = '66fd5e6f760839f44ce5d564';
            const petId = '66feb5805cb2b9be9779b97b';
            const response = await requester.post(`/api/adoptions/${userId}/${petId}`);
        
                expect(response.status).to.equal(200);
                expect(response.body).to.be.ok
                expect(response.body.payload).to.have.property('_id')
        });*/
    });

        it('GET /adoptions/:aid - Debería obtener una adopción por ID', async () => {
            const adoptionId = '673096f40f50baab1e0e3b7c'; 
            const response = await requester.get(`/api/adoptions/${adoptionId}`);
            if (response.status === 404) {
                expect(response.body).to.have.property('error', 'Adoption not found');
            } else {
                expect(response.status).to.equal(200);
                expect(response.body.payload).to.have.property('_id', adoptionId);
            }
        });


    // Tests de mascotas
    describe('Pets Endpoints', () => {
        it('GET /pets - Debería obtener todas las mascotas', async () => {
            const response = await requester.get('/api/pets');
            expect(response.status).to.equal(200);
            expect(response.body.payload).to.be.an('array');
        });

       it('POST /pets - Debería crear una nueva mascota', async () => {
            const newPet = { name: 'Firulais', specie: 'Dog', birthDate: '2020-01-01' };
            const response = await requester.post('/api/pets').send(newPet);
            expect(response.status).to.equal(200);
            expect(response.body.payload).to.have.property('_id');
        });

        it('PUT /pets/:pid - Debería actualizar una mascota', async () => {
            const petId = '66feb5805cb2b9be9779b97f';
            const updateData = { name: 'Firulais Actualizado' };
            const response = await requester.put(`/api/pets/${petId}`).send(updateData);
            expect(response.status).to.equal(200);
        });

        it('DELETE /pets/:pid - Debería eliminar una mascota', async () => {
            const petId = '66feb5a5a3053e04fa146f99';
            const response = await requester.delete(`/api/pets/${petId}`);
            expect(response.status).to.equal(200);
        });
    });

    // Tests de usuarios
    describe('Users Endpoints', () => {
        it('GET /users - Debería obtener todos los usuarios', async () => {
            const response = await requester.get('/api/users');
            expect(response.status).to.equal(200);
            expect(response.body.payload).to.be.an('array');
        });

        it('GET /users/:uid - Debería obtener un usuario por ID', async () => {
            const userId = '66fd5e6f760839f44ce5d564';
            const response = await requester.get(`/api/users/${userId}`);
            if (response.status === 404) {
                expect(response.body).to.have.property('error', 'User not found');
            } else {
                expect(response.status).to.equal(200);
                expect(response.body.payload).to.have.property('_id', userId);
            }
        });

        it('PUT /users/:uid - Debería actualizar un usuario', async () => {
            const userId = '66fd5e6f760839f44ce5d573';
            const updateData = { firstName: 'Isabel' };
            const response = await requester.put(`/api/users/${userId}`).send(updateData);
            expect(response.status).to.equal(200);
        });
/* it('DELETE /users/:uid - Debería eliminar un usuario', async () => {
            const userId = '66fd5e6f760839f44ce5d57f';
            const response = await requester.delete(`/api/users/${userId}`);
            expect(response.status).to.equal(200);
        });*/
    });

    // Tests de sesiones
    describe('Sessions Endpoints', () => {
      /*  it('POST /sessions/register - Debería registrar un nuevo usuario', async () => {
            const newUser = { first_name: 'John', last_name: 'Doe', email: 'john@example.com', password: '123456' };
            const response = await requester.post('/api/sessions/register').send(newUser);
            expect(response.status).to.equal(200);
        });*/

        it('POST /sessions/login - Debería iniciar sesión', async () => {
            const loginData = { email: 'john@example.com', password: '123456' };
            const response = await requester.post('/api/sessions/login').send(loginData);
            expect(response.status).to.equal(200);
        });

     /*   it('GET /sessions/current - Debería obtener la sesión actual del usuario', async () => {
            const response = await requester.get('/api/sessions/current');
            expect(response.status).to.equal(200);
            expect(response.body.payload).to.have.property('email');
        });*/
    });

    // Tests de generación de datos de prueba
    describe('Mocking Data Endpoints', () => {
        it('GET /adoptions/mockingpets - Debería obtener mascotas de prueba', async () => {
            const response = await requester.get('/api/mocks/mockingpets');
            expect(response.status).to.equal(200);
            expect(response.body).to.be.an('array');
        });

        it('POST /adoptions/generateData - Debería generar datos de prueba', async () => {
            const mockData = { users: 5, pets: 10 };
            const response = await requester.post('/api/mocks/generateData').send(mockData);
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property('message', 'Data generated successfully');
        });
    });
})
