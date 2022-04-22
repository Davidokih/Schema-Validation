const StudModel = require('../model/studentModel')
const validateMe = require('../validateName')


const createStud = async (req, res) => {
    try {
        const { error } = validateMe.validateStudent(req.body)
        if (error) {
            res.status(409).json({
                status: 'Fail',
                message: error.details[0].message
            })
        }
        const stud = await StudModel.create(req.body)
        res.status(201).json({
            status: "success",
            data: stud,
        })
    } catch (error) {
        res.status(500).json({
            status: 'Fail',
            message: error.message
        })
    }
}

const allStud = async (req, res) => {
    try {
        const stud = await StudModel.find()
        res.status(200).json({
            status: "success",
            data: stud,
        })
    } catch (error) {
        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}

const oneStud = async (req, res) => {
    try {
        const id = req.params.studid
        const stud = await StudModel.findById(id)
        res.status(200).json({
            status: "success",
            data: stud,
        })
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        })
    }
}

const updateStud = async (req, res) => {
    try {
        const id = req.params.studid
        const stud = await StudModel.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json({
            status: "success",
            data: stud,
        })
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        })
    }
}

const deleteStud = async (req, res) => {
    try {
        const id = req.params.studid
        const stud = await StudModel.findByIdAndDelete(id)
        res.status(204).json({
            status: "success",
            data: stud,
        })
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        })
    }
}

module.exports = {
    createStud,
    allStud,
    oneStud,
    updateStud,
    deleteStud
}