const router = require("express").Router();
const workOrderController = require("../../controllers/workOrderController");

// Matches with "/api/customers"
router.route("/")
    .get(workOrderController.findAll)
    .post(workOrderController.create);

// Matches with "/api/customers/:id"
router
    .route("/workorders/:id")
    .get(workOrderController.findById)
    .put(workOrderController.update)
    .delete(workOrderController.remove);

module.exports = router;