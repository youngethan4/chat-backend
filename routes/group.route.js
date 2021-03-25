const express = require("express");
let router = express.Router();

const groupController = require("../controllers/group.controller");

router.post("/:id", groupController.createGroup);
router.put("/:id", groupController.updateGroup);
router.delete("/:id", groupController.deleteGroup);
router.get("/:id/participant", groupController.getGroupParticipants);
router.post("/:id/participant", groupController.addGroupParticipant);

module.exports = router;
