const router = require("express").Router();
const custController = require("../../controllers/custController");

// Matches with "/api/customers"
router.route("/")
  .get(custController.findAll)
  .post(custController.create);

// Matches with "/api/customers/:id"
router
  .route("/customers/:id")
  .get(custController.findById)
  .put(custController.update)
  .delete(custController.remove);

module.exports = router;