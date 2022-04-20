var element = require('../models/element');
// List of all elements
exports.element_list = async function(req, res) {
    try{
    theelements = await element.find();
    res.send(theelements);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

// Handle element update form on PUT.
exports.element_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: element update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.element_view_all_Page = async function(req, res,next) {
    try{
    theeles = await element.find();
    console.log(theeles)
    res.render('element', { title: 'Element Search Results', results: theeles });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};

// Handle element create on POST.
exports.element_create_post = async function(req, res) {
    console.log(req.body)
    let document = new element();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"element_type":"goat", "cost":12, "size":"large"}
    document.element_name = req.body.element_name;
    document.number = req.body.number;
    document.symbol = req.body.symbol;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    exports.element_detail = async function(req, res) {
        console.log("detail" + req.params.id)
        try {
        result = await element.findById( req.params.id)
        res.send(result)
        } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
        }
        };

        // Handle element update form on PUT.
exports.element_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body${JSON.stringify(req.body)}`)
try {
let toUpdate = await element.findById( req.params.id)
// Do updates of properties
if(req.body.element_name)toUpdate.element_name = req.body.element_name;
if(req.body.number) toUpdate.number = req.body.number;
if(req.body.symbol) toUpdate.symbol = req.body.symbol;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
}
 catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}failed`);
}
};

// Handle element delete on DELETE.
exports.element_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await element.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };

    // Handle a show one view with id specified by query
exports.element_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await element.findById( req.query.id)
    res.render('elementdetail',
    { title: 'element Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle building the view for creating a element.
// No body, no in path parameter, no query.
// Does not need to be async
exports.element_create_Page =async function(req, res) {
    console.log("create view")
    try{
    res.render('elementcreate', { title: 'element Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
        