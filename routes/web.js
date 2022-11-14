const express = require('express'),
    router =  express.Router(),
    eventController  = require("../app/controllers/events.controller")
    module.exports = router ;


router.get('/', eventController.show)
router.post('/', eventController.add)

router.get('/:id/delete', eventController.destroy)

