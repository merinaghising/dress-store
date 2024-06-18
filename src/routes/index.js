const express = require('express');
const router = express.Router();

// Default route
router.get('/', async (req, res) => {
    res.json({ message: "Welcome to the dressstore application!" });
});

module.exports = router;

