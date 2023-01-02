const express = require("express");

const multer = require("multer");

const fs = require("fs");

const upload = multer({ dest: "uploads/" });

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.post("/api/avatar", upload.single("avatar"), (req, res) => {
  const { originalname } = req.file;

  const { filename } = req.file;

  fs.rename(`uploads/${filename}`, `uploads/${originalname}`, (err) => {
    if (err) throw err;

    res.send("File uploaded");
  });
});
router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

module.exports = router;
