const { Router } = require("express");
const findcont = require("../models/Findcont");
const router = Router();

// Create record in MongoDB
router.post("/", (request, response) => {
  const newFindcont = new findcont.model(request.body);
  newFindcont.save((err, findcont) => {
    return err ? response.sendStatus(500).json(err) : response.json(findcont);
  });
});

router.get("/", (request, response) => {
  findcont.model.find({}, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});
router.get("/:id", (request, response) => {
  findcont.model.findById(request.params.id, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});
router.delete("/:id", (request, response) => {
  findcont.model.findByIdAndRemove(request.params.id, {}, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});
router.put("/:id", (request, response) => {
  const body = request.body;
  findcont.model.findByIdAndUpdate(
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
