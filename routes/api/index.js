const router = require("express").Router();
const custRoutes = require("./customers");
const workOrders = require("./workOrder");

// Customer routes
router.use("/customers", custRoutes);
router.use("/workorders", workOrders);

module.exports = router;