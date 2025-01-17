const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

// ======================={All Dishes}============================================

dishRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('Will send all the dishes to you!');
})
.post((req, res, next) => {
    res.end('Will add the dish: ' + req.body.name +
            ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation is not supported on /dishes');
})
.delete((req, res, next) => {
    res.end('Deleting all the dishes!')
});

// ======================={Single Dish}============================================

dishRouter.route('/:dishId')
.get((req,res,next) => {
    res.end('Will send details of the dish with ID: ' + req.params.dishId +' to you!');
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation is not supported on /dishes/'+ req.params.dishId);
})
.put((req, res, next) => {
    res.write('Updating the dish with ID: ' + req.params.dishId + '\n');
    res.end('Will update the dish name to: ' + req.body.name + 
            ' and its details to: ' + req.body.description);
})
.delete((req, res, next) => {
    res.end('Deleting the dish with ID: ' + req.params.dishId);
});

module.exports = dishRouter;