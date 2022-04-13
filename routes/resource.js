var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var element_controller = require('../controllers/element');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// element ROUTES ///
// POST request for creating a element.
router.post('/resource/elements', element_controller.element_create_post);
// DELETE request to delete element.
router.delete('/resource/elements/:id', element_controller.element_delete);
// PUT request to update element.
router.put('/resource/elements/:id',
element_controller.element_update_put);
// GET request for one element.
router.get('/resource/elements/:id', element_controller.element_detail);
// GET request for list of all element items.
router.get('/resource/elements', element_controller.element_list);
module.exports = router;