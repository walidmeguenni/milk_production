const Joi = require("joi");

const MilkSchema = Joi.object({
  today: Joi.string().required(),
  amountMilk: Joi.number().required(),
});

const validateMilk = (req, res, next) => {
  const { error } = MilkSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }
  next();
};

module.exports = validateMilk;
