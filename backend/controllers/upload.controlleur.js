const { ObjectID } = require("mongodb");
const { User, Photo } = require("../models/User");

module.exports = imageControlleur = {
  uploadImage: async (req, res) => {
    const userId = ObjectID(req.params.id);
    const name = req.file.filename;
    const path = req.file.path;
    console.log(req.file);
    try {
      const newPhoto = new Photo({
        name: name,
        path: path,
      });
      try {
        Photo.create(newPhoto, (err, doc) => {
          if (err) res.status(503).json({ errors: error });
          else {
            User.findByIdAndUpdate(
              userId,
              { $push: { images: doc } },
              { new: true },
              (err, data) => {
                if (err) res.status(504).json({ errors: error });
                else {
                  res.status(200).json(newPhoto);
                }
              }
            );
          }
        });
      } catch (error) {
        res.status(500).json({ errors: error });
      }
    } catch (error) {
      res.status(501).json({ errors: error });
    }
  },
};
