const element = require("../models/element");

// API for our resources
exports.api = function(req, res) {
    res.write('[');
    res.write('{"resource":"elements", ');
    res.write(' "verbs":["GET","PUT", "DELETE"] ');
    res.write('}');
    res.write(']')
    res.send();
    };

