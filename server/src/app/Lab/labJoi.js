const Joi = require("joi");

const name = Joi.string();
const major = Joi.string();
const userNum = Joi.number();
const phoneNum = Joi.string().pattern(/^[0-9]+$/);

exports.createLabJoi = Joi.object({
  name: name.required(),
  associateProfessorId: Joi.number().optional(),
});

exports.getOneLabJoi = Joi.number().min(1);

exports.joinLabJoi = Joi.object({
  name: name.required(),
  major: major.required(),
  userNum: userNum.required(),
  phoneNum: phoneNum.required(),
  labId: Joi.number().min(1),
});

exports.updateJoinLabJoi = Joi.boolean();
