const db = require("../models");
const axios = require("axios");

// Defining methods for the custController
module.exports = {
  findAll: function (req, res) {
    db.Customers
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Customers
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: async (req, res) => {
    const mapData = await axios
      .get(`https://maps.googleapis.com/maps/api/geocode/json?address=${req.body.address.street}&key=${process.env.GOOGLE_API_KEY}`);
    const coords = mapData.data.results[0].geometry.location;
    const user = { ...req.body, coords };

    return db.Customers
      .create(user)
      .then(dbModel => res.json(dbModel))
      .catch(err => {console.log(err); return res.status(422).json(err)});
  },
  update: async (req, res) => {
    //TODO: Update Lat, lng if address changes.
    const mapData = await axios
      .get(`https://maps.googleapis.com/maps/api/geocode/json?address=${req.body.address.street}&key=${process.env.GOOGLE_API_KEY}`);
    const coords = mapData.data.results[0].geometry.location;
    const user = { ...req.body, coords };

    return db.Customers
      .findOneAndUpdate({ _id: req.params.id }, user)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Customers
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
