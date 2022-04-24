var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var element_controller = require('../controllers/element');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// element ROUTES ///
// POST request for creating a element.
router.post('/elements', element_controller.element_create_post);
// DELETE request to delete element.
router.delete('/elements/:id', element_controller.element_delete);
// PUT request to update element.
router.put('/elements/:id',element_controller.element_update_put);
// GET request for one element.
router.get('/elements/:id', element_controller.element_detail);
// GET request for list of all element items.
router.get('/elements', element_controller.element_list);
/* GET detail element page */
router.get('/detail', element_controller.element_view_one_Page);

/* GET create element page */
router.get('/create', element_controller.element_create_Page);

<<<<<<< HEAD

/* GET create update page */
router.get('/update', element_controller.element_update_Page);
=======
/* GET create update page */
router.get('/update', element_controller.element_update_Page);

/* GET delete costume page */
router.get('/delete', element_controller.element_delete_Page);
>>>>>>> ff4f801a1e8bee312f6d6ed06d67172c70b6f076
module.exports = router;