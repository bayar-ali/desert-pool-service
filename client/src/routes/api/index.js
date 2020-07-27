const router = require("express").Router();
const custRoutes = require("./customers");

// Customer routes
router.use("/customers", custRoutes);

module.exports = router;