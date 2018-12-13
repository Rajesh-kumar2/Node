const express = require('express');
const router = express.Router();
const da = require('../dataaccess');

router.get('/data', (req, res) => {
    res.send(da.getAllEmployees());
})

module.exports = router;