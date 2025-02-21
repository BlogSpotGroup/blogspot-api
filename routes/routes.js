const {Router} = require('express');
const router = Router();

const miscController = require("../controllers/miscController");
const usersController = require("../controllers/users.controller");

router.get('/', miscController.home);

/*USERS*/
router.get('/users', usersController.list);
router.post('/users', usersController.create);

module.exports = router; 