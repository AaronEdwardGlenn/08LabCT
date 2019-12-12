const mongoose = require('mongoose');
const Recipe = require('./Recipe');

describe('Recipe model', () => {
  it('has a required name', () => {
    const recipe = new Recipe();
    const { errors } = recipe.validateSync();

    expect(errors.name.message).toEqual('Path `name` is required.');
  });

  it('has a name and directions field', () => {
    const recipe = new Recipe({
      name: 'Cookies',
      directions: [
        'preheat oven to 375',
        'mix ingredients',
        'put dough on cookie sheet',
        'bake for 10 minutes'
      ]
    });

    expect(recipe.toJSON()).toEqual({
      _id: expect.any(mongoose.Types.ObjectId),
      name: 'Cookies',
      directions: [
        'preheat oven to 375',
        'mix ingredients',
        'put dough on cookie sheet',
        'bake for 10 minutes'
      ], 
      ingredients: expect.any(Array)
    });
  });

  it('recipies have a ingrediants schema', () => {
    const recipe = new Recipe({
      name: 'Chocky Chap', 
      directions: [
        'make the chappys',
        'enter the cooks',
        'sendddddd it'
      ], 
      ingredients: [{
        name: 'flour',
        ammount: 4, 
        measurment: 'cups'
      }]
    });

    expect(recipe.toJSON()).toEqual({
      _id: expect.any(mongoose.Types.ObjectId),
      name: 'Chocky Chap', 
      directions: [
        'make the chappys',
        'enter the cooks',
        'sendddddd it'
      ], 
      ingredients: [{
        _id: expect.any(mongoose.Types.ObjectId),
        name: 'flour',
        ammount: 4, 
        measurment: 'cups',
      }],
    });
  });
});
