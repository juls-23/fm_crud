const express = require('express');
const ThingController = require('../controllers/thing.controller');

const router = express.Router();

router
  .route('/thing')
  .post(ThingController.createThing)
  .get(ThingController.getAllThings);

router
  .route('/thing/:id')
  .get(ThingController.getThing)
  .patch(ThingController.updateThing)
  .delete(ThingController.deleteThing)

module.exports = router; 