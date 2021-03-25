const express = require("express");
let router = express.Router();

const relationshipController = require("../controllers/relationship.controller");

router.post("/", relationshipController.createRelationship);
router.put("/:id", relationshipController.updateRelationship);
router.delete("/:id", relationshipController.deleteRelationship);

module.exports = router;
