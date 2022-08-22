const getLocation = (req, res, next) => {
  const location = req.location || null;
  res.json({ msg: 'success', location });
};

module.exports = getLocation;
