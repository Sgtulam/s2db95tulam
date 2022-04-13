var element = require('../models/element');
// List of all elements
exports.element_list = function(req, res) {
res.send('NOT IMPLEMENTED: element list');
};
// for a specific element.
exports.element_detail = function(req, res) {
res.send('NOT IMPLEMENTED: element detail: ' + req.params.id);
};
// Handle element create on POST.
exports.element_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: element create POST');
};
// Handle element delete form on DELETE.
exports.element_delete = function(req, res) {
res.send('NOT IMPLEMENTED: element delete DELETE ' + req.params.id);
};
// Handle element update form on PUT.
exports.element_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: element update PUT' + req.params.id);
};