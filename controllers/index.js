'use strict'

const bcrypt = require('bcrypt-nodejs');
const path = require('path');
const fs = require('fs');

const Persona = require('../models/persona');
const messages = require('./message');

var indexCtrl = {};

indexCtrl.home = function(req, res) {
  Persona.find((err, personas) => {
    console.log(personas);
  });
  res.render('index', {title: 'Home', message: messages.message});
}

module.exports = indexCtrl;
