const router = require("express").Router();
const custController = require("../../client/src/controllers/custController");

// Matches with "/api/customers"
router.route("/")
  .get(custController.findAll)
  .post(custController.create);

// Matches with "/api/customers/:id"
router
  .route("/:id")
  .get(custController.findById)
  .put(custController.update)
  .delete(custController.remove);

module.exports = router;