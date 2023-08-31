const Joi = require("joi");

const BirthSchema = Joi.object({
  cowId: Joi.number().required(),
  birthDate: Joi.string().required(),
  breed: Joi.string().required(),
});

const validateBirth = (req, res, next) => {
  const { error } = BirthSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }
  next();
};

module.exports = validateBirth;
