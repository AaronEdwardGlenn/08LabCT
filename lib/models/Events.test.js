const mongoose = require('mongoose');
const Events = require('./Events');


describe('events', () => {
    it('contains a recipie id', () => {
        const event = new Events(); 
        const { errors } = event.validateSync(); 
        expect(errors.recipieId.message).toEqual('Path `recipieId` is required.'); 

    });

    it('has a required dateOfEvent', () => {
        const event = new Events();
        const { errors } = event.validateSync();
    
        expect(errors.dateOfEvent.message).toEqual('Path `dateOfEvent` is required.');
      });
    
      it('has a required rating', () => {
        const event = new Events();
        const { errors } = event.validateSync();
    
        expect(errors.rating.message).toEqual('Path `rating` is required.');
      });


    it('has a rating between 0 and 5', () => {
        const event = new Events({
            recipieId: 69, 
            dateOfEvent: 'jan 1, 2019',
            notes: 'made some cookies today',
            rating: 69
        }); 
        const { errors } = event.validateSync(); 
        expect(errors.rating.message).toEqual('Path `rating` (69) is more than maximum allowed value (5).'); 

    });

   

});

