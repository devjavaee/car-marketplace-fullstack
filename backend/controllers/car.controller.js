const getCars = (req, res) => {
  res.json({
    message: "Liste des voitures",
    cars: []
  });
};

module.exports = { getCars };
