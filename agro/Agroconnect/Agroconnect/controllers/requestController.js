const Request = require('../models/Request');

const createRequest = async (req, res) => {
  try {
    const { user, acreage, estimatedHarvestTime, soilType, machineType, location } = req.body;

    const newRequest = new Request({
      user,
      acreage,
      estimatedHarvestTime,
      soilType,
      machineType,
      location,
    });

    const saved = await newRequest.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create request', details: err.message });
  }
};

const getRequestsByUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const requests = await Request.find({ user: userId });
    res.json(requests);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch requests', details: err.message });
  }
};

module.exports = { createRequest, getRequestsByUser };
