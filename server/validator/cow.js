const Joi = require("joi");

const CowSchema = Joi.object({
  entryDate: Joi.string().required(),
  breed: Joi.string().required(),
});

const validateCow = (req, res, next) => {
  const { error } = CowSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }
  next();
};

module.exports = validateCow;
