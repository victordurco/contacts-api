import joi from 'joi';

const newContactSchema = joi.object({
  name: joi.string().min(2).max(255).required(),
  phone: joi.string().min(11).max(20).required(),
  email: joi.string().min(5).max(255).required(),
});

export{ 
    newContactSchema
}