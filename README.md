# 08LabCT

NOTES 11-12-19

create utils/models/ book && page.js

## page.sj 

const mongoose = require ('mongoose 

const schema  new mongoose.Chema({
    headerText:  {
        type: string, 
        required: true
    }

    bodyText: {
        type: string, 
        required: true
    }

    footerText:  {
        type: string, 
        required: true
    }
}))

module.exports = mongoose.model('Page', schema)

### book.js

cosnt mongoose = require('mongoose')

cosnt schema = new mongoose.Schema(
    coverURL: {
        type: string, 
        rquied: true
    }
    copyright: {
        type: string, 
        required: true
    }, 
    pags: [{
        type: mongo.Schema.Types.ObjectId, 
        ref: 'Page' < ---- this is how we tie the models together from Page.js
    }]

    *** so we use an array here cuz pages will not be infinte in length. 
)

module.exports = mongoose.model('Book', schema)

## sandbox.js  ** one to many relationship (one book many pages)

require('dotenv').config(); 

const page = requrie('./... page.js)
const book = requrie('./... book.js)

async function Play() {
cosnt pages = Page.create([
    {headerText: 'The Great Spot', bodyTxt: 'Spot weights 5 lbs', footerTest: 'age 5'}, 
     {headerText: 'The Great Spot', bodyTxt: 'Spot weights 5 lbs', footerTest: 'age 6'}, 
      {headerText: 'The Great Spot', bodyTxt: 'Spot weights 5 lbs', footerTest: 'age 7'}, 
       {headerText: 'The Great Spot', bodyTxt: 'Spot weights 5 lbs', footerTest: 'age 8'}, 
        {headerText: 'The Great Spot', bodyTxt: 'Spot weights 5 lbs', footerTest: 'age 9'}, 
]); 

await Book.create({
    coverURL: ('HTTPS ....)
    coppyright: 'hella'
    pages: pages.map(page => page._id)
})
}

play()
    .then(() =>> console.log(done'))


    ## page.js

    bookId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Book' 


    }
    *** this above is an example of the opposite of above. it is a page with many books?

    ### sandbox.js

    before creating pages, create the book first. 

    every page has a book ID

    await Page.creteat([
        {book._id: }
    ])

    ### sandbox.js ** many to many relationships ex. 

    async function play() {
        Book 
        .find()
        .then(book => console.log(book))
    }/// prints the book

    async function play() {
        Book 
        .find()
        .then(page => console.log(page))
    }/// prints a bunch of pages

      async function play() {
        Page 
        .find()
        .populate('bookId)
        .then(page => console.log(page)) 
        *** this is a great mongoose tool to match ids up. Joining stuff

        ** if i know what book i have **grabbing book id, ** and then want to grab all pages associated with this book. 

 async function play() {
       Promise.all([
           book.findById('234243234'), 
           Page.find({ bookId: 'same as number string above**'})

           ])
           .then(([book, pages])) => {
               console..og(book, pages)
           }

 async function play() {
        Page 
        .find( bodyText: 'spot weights 20 lbs'})
        .populate('bookId)
        .then(pages => console.log(pages))
        *** this pulls all books with thes bodytext

______________________ making the example ** many to one. cuz we have our array creatureType in creature.js

##creature type 

make the cons schema = new mongoose.Schema{
    {}
}

## Creatrue.js

const schema = new mongoose.Schema({
    other stuff{}
})

##change app.test.js to creatureTypes.test.js

before All connect
before each drop data

afterAll conection.close

it('creates a new clrea with POST , () => {
    return requre(app)
    .post('/api/v1/creatureTypes)
    .send({
        type: 'mermaid'
        powers: ['splash, 'swim', 'drown']
        haibtat: 'under the sea'
        weakensses; ['land', 'hot dudes']
        humanoid: ture
    })
    .then(res => {
        expect(res.body).toEqual({
            id: expect.any String ......
        })
    })
})

##creatureTypes.js

const { router } = require('express)

const CreatureType = require (./mondesl..)

module.exports = Router()
.post('/', (req, res))...

### app.js 

use(./api/v1 ... CreatureTypes, 

##creatureype.test.s 

it ('gets the creatrye type by id)

at the top*

let creatureType; 
beforeEach (() => {
creatureType = await CreatureType.create({
    type: 'unicorn' 
    powers: ['love', 'rainbows', invisibilty, speed'], 
    habitat: 'Narnia', 
    weakness: ['internet', ]
    humanoid: false
})
})

now back to ...

it('gets a creatrue by typewith GET', () => {
    return rquest(app)
    .get(`api.// ${univorn._id})
    .then(res => {
        expect(res.body).toEqual({
            id: univorn._id.toString();
             type: 'unicorn' 
    powers: ['love', 'rainbows', invisibilty, speed'], 
    habitat: 'Narnia', 
    weakness: ['internet', ]
    humanoid: false
    __v: 0
        })
    })
})

*** when we get our rponse from express, the id is a string. when we get the resposne from mongo, the id is an object ID. 

## creatureTypes.js

.get(./:id, (req, res) => {
    CreatureType
    .findById(req.params.id)
    .then(creatureType => res.send(creatureType))
})


### creatureTpes.test.js

require...

unicorns = await Creatrue.create([
    { name: 'lord', challengeRaiting: 3, creatureType: unicorn._id }
    { name: 'spot', challengeRaiting: 20, creatureType: unicorn._id }
    { name: 'unico', challengeRaiting: 15, creatureType: unicorn._id }

])

@it(') gets all the creatures who are in the list of thi stype
add creatures to test under humidoit ... 
creature: JSON.pasrse(JSON.stringify(unicorn)); <--- this is for the Id cuz it needs to have all methods striped off and then gets teh right result?

line 248 sorting here ... 
##

const Creature = require('.model/creature)

.get('/:id, (req, res) => {
    Promise.alsl([
        CreatureTYpe.findById(req.params.ed), 
        Creature.fin({ creatureType: req.parms.id
        })
    ])
    .then(([creatureType, creatures])) => {
        
        res.send({... creatureType.toJSON() ** .toJSON strips off the metohds** , creatures})
    } 
})

## creatureType.js

ned of schema, versionKey: false can be added. 

then you dont need to put __v: 0 in our res in the test.

** mental note** review spreading in object. 

## creature.test.js

** this is new, set it up with before ALL /each/ afterAll

it('can create a creature with a POST(() => {

})) ---- continued like 294

so let's make a unicorn creature type
let unicorn Creature Type: 
before Each ( async() => {
    unicornCreauteType = await CreatureType
    .create({
        unicorn ges here with type, powers: , etc. 
        creatueType: unicornCreatueType._id <----this doesnt need to be stringified here cuz supertest dependencey does this for us at this point.
    })
})

it('can create a creature with a POST(() => {
reutn request(app)
.posst('./api/v1...)
.send({
    name: spot 
    challengerating: 5
    creatueType: unicornCreateType._id
})

.then (res=> {
    _id: expet.any(String),
    name: 'spot
    chalengrating: 5
    creaturetype ;unicronCreatueType._id.toString()
    __v:0
})
})) -


## creatues.js

cosnt { Router } = require('express'); 
const Creature = require('./moduels/creatues)

module.exports = Router()
    .post('/', (req, res) => {
        Creature
        .create(req.body)
        .then(creature => res.send(creature))
    })

need to add middleware now. 

## app.js

app.use ('.../api/v1/createus, requie(./routes/creatures.j))


## creatue.test.js

it('can get a creatue by ID. )
*** now we go up and create a creatue at the top. 

creature = await Creature
.create({
    name: 'spot'
    challengeRaiting: 20, 
    creatureType: unicornCreatureType._id
})

it('can get a creature by its id', () => {
    return request(app)
    .get('./api/v1...${creature.id})
    .then (res => {
        expect(res.body).toEqual({
            id: create._id.toString()
            name: spot
            challrating: 20 
           ** dont stress this line too much -- creatureType: JSON.parse(JSON.stringify(unicornCratueType), 
            __v: 0
        })
    })
})

## creatures.sj

.get('/:id', (req,res) => {
    Creature
    .findById(req.params.id)
    .populate('creatureType') < --- without this .populate we jsut get teh Id, with we get the createtype with the id and gets the whole creature type object. 
    .then(creatue => res.send(creature)); 

})

populate finds the creatureType associated with the id and then populates with the infomation in the shcema of that creatureType. 

_________________________-

the lab today: 
update Event . 

for findbyidanddelete

Event.deleteMany({ that matches this query })

Recipie.find({ serach query here })


