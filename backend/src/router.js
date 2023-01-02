const express = require("express");

const multer = require("multer");

const upload = multer({ dest: "uploads/" });

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.post("/api/avatar", upload.single("avatar"), (req, res) => {
  res.send("File uploaded");
});
router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

module.exports = router;
