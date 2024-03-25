const fs = require('fs');
module.exports = registerModels;

let models= [];
const path = `${__dirname}/models`;

function registerModels (req, res, next) {
    if (models[req.sub] == req.sub) {
        req.model = models[req.sub];
    }
    else {
        let instanceModels = [];
        let schemas = fs.readdirSync(path);
        schemas.forEach(function(schema) {
            let model = schema.split('.').shift();
            instanceModels[model] = req.db.model(model, require([path, schema].join('/')));
        });
        models[req.sub] = instanceModels;
        req.model = models[req.sub];
    }
    next();
}