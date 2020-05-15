const express = require('express')
const json = require('body-parser').json()

const People = require('./people.service')

const router = express.Router()

router.get('/', (req, res) => {
  let response = People.get();
  res.json(response);
})

router.post('/', json, (req, res) => {
  People.enqueue(req.body.Name)
  res.json('You have been added to the queue')
})

module.exports = router
