const {Router} = require('express')
const {getStaff, createStaff, getStaffById} = require('../controllers/staff')

const staffRouter = Router()

staffRouter.get('/', getStaff)
staffRouter.post('/', createStaff)
staffRouter.get('/:id', getStaffById)



module.exports = staffRouter;