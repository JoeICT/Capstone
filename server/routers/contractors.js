const { Router } = require("express");
const contractor = require("../models/Contractor");
const router = Router();

// Create record in MongoDB
router.post("/", (request, response) => {
  const newContractor = new contractor.model(request.body);
  newContractor.save((err, contractor) => {
    return err ? response.sendStatus(500).json(err) : response.json(contractor);
  });
});

router.get("/", (request, response) => {
  contractor.model.find({}, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});
router.get("/:id", (request, response) => {
  contractor.model.findById(request.params.id, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});
router.delete("/:id", (request, response) => {
  contractor.model.findByIdAndRemove(request.params.id, {}, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});
router.put("/:id", (request, response) => {
  const body = request.body;
  contractor.model.findByIdAndUpdate(
    request.params.id,
    {
      $set: {
        fname: body.fname,
        lname: body.lname,
        cname: body.cname,
        phone: body.phone,
        form1: body.form1,
        trade: body.trade
      }
    },
    (error, data) => {
      if (error) return response.sendStatus(500).json(error);
      return response.json(request.body);
    }
  );
});

module.exports = router;