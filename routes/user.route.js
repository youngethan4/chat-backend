const express = require("express");
let router = express.Router();

const userController = require("../controllers/user.controller");

router.get("/", userController.getUsers);
router.get("/:id", userController.getUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.get("/search", userController.searchUsers);
router.get("/:id/relationship", userController.getUserRelationships);
router.get("/:id/group", userController.getUserGroups);

module.exports = router;
