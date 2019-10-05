import Joi from 'joi-browser';

export const schema = {
  type: 'user',
  label: 'User',
  fields: {
    username: 'string',
    email: 'string',
    type: {
      oneOf: ['ADMIN', 'CLIENT'],
      type: 'string',
    },
    active: 'bool',
  },
  settings: {
    allowDelete: false,
  },
};

export const validation = Joi.object({
  username: Joi.string()
    .max(12)
    .trim(),
  email: Joi.string()
    .email()
    .trim(),
  type: Joi.any().valid('ADMIN', 'CLIENT'),
  active: Joi.boolean(),
});

export default {
  schema,
  validation,
};
