var express = require('express');
var router = express.Router();
const elements_controller = require('../controllers/element')

/* GET home page. */
router.get('/', elements_controller.element_view_all_Page);

module.exports = router;
