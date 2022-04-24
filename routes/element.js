var express = require('express');
var router = express.Router();
var element_controller = require('../controllers/element');

/* GET home page. */
router.get('/', element_controller.element_view_all_Page);
/* GET create update page */
//router.get('/update', element_controller.element_update_Page);


module.exports = router;
