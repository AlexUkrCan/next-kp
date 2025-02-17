import Joi from "joi";


const userValidator = Joi.object({
    username:Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/).required().messages({
        "string.pattern.base":"allows characters only"
    }),
    password:Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/).required().messages({
        "string.pattern.base":"allows characters only"
    }),


});

export default userValidator;