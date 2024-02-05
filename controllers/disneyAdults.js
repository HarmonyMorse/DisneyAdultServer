const express = require('express');

const { DisneyAdult } = require('../models');
const DisneyItem = require('../models/DisneyItem');

// Index all Disney Adults
const index = async (req, res) => {
    try {
        res.json(await DisneyAdult.find({}));
    } catch (err) {
        res.status(400).json(err);
    }
};

// Show Disney Adult
const show = async (req, res) => {
    try {
        const disneyAdult = await DisneyAdult.findById(req.params.id).populate('items');
        res.json(disneyAdult);
    } catch (err) {
        res.status(400).json(err);
    }
}

// Create new Disney Item
const create = async (req, res) => {
    try {
        const newDisneyItem = await DisneyItem.create(req.body);
        const disneyAdult = await DisneyAdult.findById(req.params.id);
        disneyAdult.items.push(newDisneyItem);
        await disneyAdult.save();
        res.json(newDisneyItem);
    } catch (err) {
        res.status(400).json(err);
    }
};

// Create new Disney Adult
const newDA = async (req, res) => {
    try {
        const newDisneyAdult = await DisneyAdult.create(req.body);
        res.json(newDisneyAdult);
    } catch (err) {
        res.status(400).json(err);
    }
};



module.exports = {
    index,
    show,
    new: create,
    newDA
};