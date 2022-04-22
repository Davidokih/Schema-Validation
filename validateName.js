const joi = require('@hapi/joi')

const validateStudent = (data) => {
    const studentConstraint = joi.object({
        name: joi.string().required().min(3).max(30),
        institution: joi.string().required(),
        course: joi.string().required()
    })
    return studentConstraint.validate(data)
}

module.exports.validateStudent = validateStudent




