const { Router } = require('express');

const ContactController = require('./app/controllers/ContactController');

const router = Router();

router.get('/contacts', (request, response) => {
  ContactController.index(request, response);
});

module.exports = router;
