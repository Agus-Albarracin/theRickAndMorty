//tarea de testing

const app = require('../src/app')
const session = require('supertest');
const { response } = require('../src/app')
const agent = session(app);

var props;
var favorites;
var character1;
var character2;

beforeEach(() =>{
console.log("Inicializando beforeEach")
props = ["id", "name", "species", "gender", "image"]
favorites = [];

character1 = {
id: 1,
name: "Rick Sanchez",
species: "Human",
gender: "Male",
image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
}
character2 = {
id: 2,
name: "Morty Smith",
species: "Human",
gender: "Male",
image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
}

})


describe ("Test de RUTAS", () =>{

 describe('GET /rickandmorty/character/:id', () =>{
        it('Responde con status: 200', async() =>{
            await agent.get('/rickandmorty/character/1').expect(200);
        })

        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async ()=>{
           const response = await agent.get('/rickandmorty/character/1');
           props.forEach((prop) =>{
            expect(response.body).toHaveProperty(prop)
           })
        })

        it('Si hay un error responde con status: 500', async () =>{
            await agent.get('/rickandmorty/character/a').expect(500)
        })

 })
 describe("GET /rickandmorty/login", () =>{

    it("Valida que, si ejecutas esta ruta pasándole la información de login (email y password) correctas", async () =>{
        const response = await agent
        .get('/rickandmorty/login')
        .query({email: "agus14PT@hotmail.com",
                password: "PartTime$123" })
        expect(response.body).toEqual({access: true})
    })

    it("Valida que, si ejecutas esta ruta pasándole la información de login (email y password) correctas", async () =>{
        const response = await agent
        .get('/rickandmorty/login')
        .query({email: "a@hotmail.com",
                password: "P" })
        expect(response.body).toEqual({access: false})
    }) 
 })
 describe("POST /rickandmorty/fav", () =>{

         it("Lo que envíes por body debe ser devuelto en un arreglo",async() =>{
          favorites.push(character1)
          const response = await agent
          .post('/rickandmorty/fav').send(character1)
            expect(response.body).toEqual(favorites)
         })


        it("Si vuelves a enviar un nuevo elemento por body, este debe ser devuelto en un arreglo que incluye un elemento enviado previamente",
        async() =>{
        favorites.push(character1, character2)
        const response = await agent
        .post('/rickandmorty/fav').send(character2)
        expect(response.body).toEqual(favorites)
        })
 })
 describe("DELETE /rickandmorty/fav/:id", () =>{


        it("Primero deberás testear que lo que devuelva esta ruta, en el caso de que no haya ningún personaje con el ID que envías, sea un arreglo con los elementos previos sin modificar.",
        async ()=>{
        favorites.push(character1, character2)
        await agent.delete('/rickandmorty/fav/a32').expect(200, favorites);
         })


        it("Luego debes testear que cuando envías un ID válido se elimine correctamente al personaje.",
        async ()=>{
        favorites.push(character1)
        await agent.delete('/rickandmorty/fav/2').expect(200, favorites);
         })
 })

})