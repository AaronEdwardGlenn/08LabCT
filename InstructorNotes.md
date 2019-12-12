
# Mongoose relations

## Agenda

* Relationships
  * One-to-One
  * One-to-Many
  * Many-to-One
  * Many-to-Many
* Populate
  * from relationship side
  * from non-relationship side
* Select

## Relationships

Model relationships are associations between data in one collection
with data in another collection.

### One-to-One

One-to-One relationships are relationships where one document in
a collection is related to one document in another collection.

* person to ssn
* person to cell phone number
* person to dna
* country to capital

Typically one-to-one relationships happen when one entity is
broken down into multiple collections.

### One-to-Many

One-to-Many relationships are relationships where one document in
a collection is related to many documents in another collection.

* person to dogs
* person to fingers
* book to pages
* pdx to bars
* people to tweets? 

One-to-Many relationships are represented by an array of ObjectIds
inside of a Model. The Many side should be limited to some reasonable
number because MongoDB documents have a maximum size.

### Many-to-One **** err on the this side. the object ID is on this side. 

Many-to-One relationships are relations where many documents in a
collection are related to one document in another collection.

* orders to customers

Many-to-One relationships are represented by an ObjectId inside of
a Model. The Many side is not limited.

### Many-to-Many

Many-to-Many relationships are relations where many documents in
a collection are related to many documents in another collection.

* tags to tweets
* travelers to destinations. 

Many-to-Many relationships are represented by an array of ObjectIds
inside of a Model. The side with less possible relations should
contain the relationship.

## Populate

### From relationship side

```js
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const Person = mongoose.model('Person', personSchema);

const dogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  weight: {
    type: String,
    required: true
  }
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Person',
    required: true
  }
});

const Dog = mongoose.model('Dog', dogSchema);

Dog
  .find()
  .populate('owner')
  .then(dogWithOwner => console.log(dogWithOwner));
```

### From Non-relationship side

```js
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const Person = mongoose.model('Person', personSchema);

const dogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  weight: {
    type: String,
    required: true
  }
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Person',
    required: true
  }
});

const Dog = mongoose.model('Dog', dogSchema);

Promise.all([
  Person.findById(id),
  Dog.find({ owner: id })
])
  .then(([person, dogs]) => {
    console.log(person, dogs);
  })
```

## Select

Sometimes we don't want to select all fields from our database.
In these cases we can use select to select only a subset of fields.

```js
Dog
  .find()
  .select({
    name: true
  })
  .then(dogNames => console.log(dogNames));

Dog
  .find()
  .select({
    name: false
  })
  .then(dogsWithNames => console.log(dogsWithNames));
```
