const { Supermarket } = require("../models/Supermarket");

module.exports = supermarketController = {
    addSupermarket: async (req, res) => {
        const { name, zipcode, location} = req.body;
        
          try {
            const supermarketResult = await Supermarket.findOne({ name });
            if (supermarketResult)
              return res
                .status(400)
                .json({ errors: "supermarket already exist ! try another one" });
                const newSupermarket = new Supermarket({
                    name,
                    zipcode,
                    location
            });
                  const addResult = await newSupermarket.save();
                  res.status(201).json(addResult);
          } catch (error) {
            res.status(500).json({ errors: error });
          }
        },
      

  getAllSupermarket: async (req, res) => {
    try {
      const searchAllSupermarket = await Supermarket.find( ).populapte("products");
      res.status(200).json(searchAllSupermarket);
    } catch (error) {
      res.status(500).json({ errors: error });
    }
  }
};
