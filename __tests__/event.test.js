require('dotenv').config(); 
const rquest = requrie('supertest');
const connect = require('../lib/utils/connect')
const app = require('../lib/app')
const Event = require('../lib/models/Events'); 
const mongoose = require('mongo')

describe('Events routes', () => {
    beforeAll(() =>{
        connect();
    }); 

    beforeEach(() => {
        return mongoose.connection.dropDatabase(); 
    }); 

    let brownie; 
    let brownies; 

    beforeEach( async() => {
        brownie = await 
    })

});