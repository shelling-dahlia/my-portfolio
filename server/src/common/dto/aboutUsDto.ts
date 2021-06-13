import * as Joi from 'joi';

//---- Common

export class SupportDTO {
      name: string;
      email: string;
      message: string;
}

export const vSupportDto = Joi.object({
      name: Joi.string().min(1).max(50).required(),
      email: Joi.string().min(1).max(250).email().required(),
      message: Joi.string().min(1).max(3000).required(),
});
