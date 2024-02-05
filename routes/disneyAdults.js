// Install express
const express = require('express')

// Create a router
const router = express.Router()

const disneyAdultCtlr = require('../controllers/disneyAdults');

// GET '/' - list all disney adults
router.get('/', disneyAdultCtlr.index);

// POST '/' - create new disney adult
router.post('/', disneyAdultCtlr.newDA);

// GET '/:id' - detail page for disney adult
router.get('/:id', disneyAdultCtlr.show);

// POST '/:id' - create and add new item to a disney adult
router.post('/:id', disneyAdultCtlr.new);

module.exports = router;