const { check, validationResult } = require("express-validator");

exports.registerRules = () => [
  check("firstName", " this field is required ").notEmpty(),
  check("lastName", " this field is required ").notEmpty(),
  check("email", " this field is required ").notEmpty(),
  check("email", " this field should be a valid email ").isEmail(),
  check("address", " this field is required ").notEmpty(),
  check("password", " this field is required ").notEmpty(),
  check("password", " password should be a 6 character minimum ").isLength({
    min: 6,
  }),
  // check('accountType', ' must choose a valid type ').notEmpty()
];

const errorFormatter = ({ msg }) => {
  return `${msg}`;
};
exports.validator = (req, res, next) => {
  const errors = validationResult(req).formatWith(errorFormatter);
  errors.isEmpty() ? next() : res.status(400).json({ errors: errors.array() });
};
