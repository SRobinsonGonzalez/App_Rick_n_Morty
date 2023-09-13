const server = require('../src/app');
const supertest = require('supertest');
const agent = supertest(server);

describe('Test de Rutas', () => {
    describe('GET / /rickandmorty/character/:id', () => {
        it('Responde con el status 200', async () => {
            await agent.get('/rickandmorty/character/1').expect(200);
        });
        it('Si hay un error responde con el status 500', async () => {
            await agent.get('/rickandmorty/character/3312').expect(500);
        });
        it('Responde con un objeto con las propiedades: "id", "name", "species", "gender", "origin", "status" e "image"', async () => {
            const { body } = await agent.get('/rickandmorty/character/1');
            const characters = [
                "id",
                "name",
                "species",
                "gender",
                "origin",
                "status",
                "image"
            ]
            // const keys = Object.keys(body);
            // characters.forEach((character) => {
            // expect(keys).toContain(character);
            characters.forEach((character) => {
                expect(body).toHaveProperty(character);
            });
        });
        describe('GET / rickandmorty/login', () => {
            it(('Informacion correcta'), async () => {
                const { body } = await agent.get('/rickandmorty/login?email=hh.robinson95@hotmail.com&password=Kiwii9');
                expect(body.access).toEqual(true);
            });
        });
        describe('POST /rickandmorty/fav', () => {
            const testCharA = { id: 1, name: 'TEST A' }
            const testCharB = { id: 2, name: 'TEST B' }
            it('Devuelve un array con la informacion enviada', async () => {
                const { body } = await agent.post('/rickandmorty/fav').send(testCharA);
                expect(body).toContainEqual(testCharA);
            });
            it('Devuelve un array con la informacion enviada', async () => {
                const { body } = await agent.post('/rickandmorty/fav').send(testCharB);
                expect(body).toContainEqual(testCharB);
            });
        });
        describe('DELETE /rickandmorty/fav/:id', () => {
            const testCharA = { id: 1, name: 'TEST A' }
            const testCharB = { id: 2, name: 'TEST B' }
            it(('Si no se elimina al personaje, devuelve el mismo array'), async () => {
                const { body } = await agent.delete('/rickandmorty/fav/3312');
                expect(body).toContainEqual(testCharA);
                expect(body).toContainEqual(testCharB);
            });
            it(('Si no se elimina al personaje, devuelve el mismo array'), async () => {
                const { body } = await agent.delete('/rickandmorty/fav/2');
                expect(body).not.toContainEqual(testCharB);
            });
        });
    });
});