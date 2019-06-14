const router = require('express').Router();
const Users = require('../auth/authModel');
const restricted = require('../auth/restricted-middleware')
const checkRole = require('../auth/checkRole')

// const restricted = require('../auth/restricted-middleware.js');

router.get('/', restricted, (req, res) => {        //checkRole("sales") table needs to acount for this,
    Users.find()
      .then(users => {
        res.json(users);
      })
      .catch(err => res.send(err));
  });

  module.exports = router