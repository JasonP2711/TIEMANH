const express = require("express");
const router = express.Router();
const { Order } = require("../models/index");
const {
  validateSchema,
  OrderIdSchema,
  OrderBodySchema,
} = require("../validation/order");

router.get("/", async (req, res, next) => {
  try {
    await Order.find().then((response) => {
      res.send({ ok: true, results: response });
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.get("/:id", validateSchema(OrderIdSchema), async (req, res, next) => {
  try {
    const id = req.params.id;
    await Order.findById(id).then((response) => {
      res.send({ ok: true, results: response });
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", validateSchema(OrderIdSchema), async (req, res, next) => {
  try {
    const id = req.params.id;
    await Order.findByIdAndDelete(id).then((response) => {
      res.send({ ok: true, message: "delete success!" });
    });
  } catch (err) {
    return res.status(500).json({ error: error.message });
  }
});

router.post("/", validateSchema(OrderBodySchema), async (req, res, next) => {
  try {
    const data = req.body;
    console.log(data);
    let newData = new Order(data);
    await newData.save().then((response) => {
      res.send({ ok: true, results: response });
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.patch(
  "/:id",
  validateSchema(OrderBodySchema),
  async (req, res, next) => {
    try {
      const id = req.params.id;
      const bodyItem = req.body;
      await Order.findByIdAndUpdate(id, bodyItem).then((response) => {
        res.send({ ok: true, message: "success", results: response });
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
);

module.exports = router;
