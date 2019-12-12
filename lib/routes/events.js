const { Router } = require('express');
const Event = require('../models/Events');

module.exports = Router()

.post('/', (req, res) => {
    Event
      .create(req.body)
      .then(Event => res.send(Event));
  })
  
.get('/', (req, res) => {
    Event
      .find()
      .select({ name: true })
      .then(event => res.send(event));
  })
  
.get('/:id', (req, res) => {
    Event
      .findById(req.params.id)
      .then(event => res.send(event));
  })
  
.patch('/:id', (req, res) => {
    Event
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(event => res.send(event));
  })
  
.delete('/:id', (req, res) => {
    Event
      .findByIdAndDelete(req.params.id)
      .then(event => res.send(event));
  });
