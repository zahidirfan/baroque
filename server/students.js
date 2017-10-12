const db = require('../db') //this is required
const Student = require('../db/models/student');

const router = require('express').Router()

router.get('/', function(req, res, next) {
    Student.findAll({
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});

router.get('/:id', function(req, res, next) {
    Student.findOne({
            where:{id:req.params.id}
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});

// router.post('/create', function(req, res, next) {
//     Student.createNew({
//             db.model('students').create(res)
//         })
//         .then(result => {
//             res.status(200).send(result);
//         })
//         .catch(next);
// });

module.exports = router
