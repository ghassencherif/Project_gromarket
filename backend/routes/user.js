const express = require("express");

const deliveryBoyControlleur = require("../controllers/delivery.boy.controlleur");
const imageControlleur = require("../controllers/upload.controlleur");
const surveyControlleur = require("../controllers/survey.controlleur");
const { registerRules, validator } = require("../middlewares/validator");
const imageValidation = require("../middlewares/imageValidator");
const multerUpload = require("../middlewares/upload");
const isAuth = require("../middlewares/passport-setup");
const Router = express.Router();

Router.post(
  "/register",
  registerRules(),
  validator,
  deliveryBoyControlleur.register
);
Router.post("/login", deliveryBoyControlleur.login);
Router.get("/profile", isAuth(), (req, res) => res.json(req.user));
Router.post(
  "/upload/:id",
  multerUpload,
  imageValidation,
  imageControlleur.uploadImage
);
Router.get("/confirmation/:emailToken", deliveryBoyControlleur.emailValidation);
Router.get("/confirmation-survey", surveyControlleur.confirmSurvey);

Router.get(
  "/admin/getAllDeliveryBoy",
  deliveryBoyControlleur.getAllDeliveryBoy
);
Router.get(
  "/admin/getOneDeliveryBoy/profile/:id",
  deliveryBoyControlleur.getOneUser
);

module.exports = Router;
