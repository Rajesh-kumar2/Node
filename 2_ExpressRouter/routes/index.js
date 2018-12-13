const express = require('express');
const router = express.Router();
const da = require('../dataaccess');

router.get('/', (req, res) => {
    res.render("index", { ptitle: "Express App" });
})

router.get('/employees', (req, res) => {
    var emps = da.getAllEmployees();
    res.render("employees", { ptitle: "Employees View", empList: emps });
})

module.exports = router;