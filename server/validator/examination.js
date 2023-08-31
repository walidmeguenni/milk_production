const Joi = require("joi");

const ExaminationSchema = Joi.object({
  examinationDay: Joi.string().required(),
  disease: Joi.string().required(),
});

const validateExamination = (req, res, next) => {
  const { error } = ExaminationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }
  next();
};

module.exports = validateExamination;
