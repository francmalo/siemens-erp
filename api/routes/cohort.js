const {Router } = require('express');
const {getCohorts, createCohort, getCohortById, updateCohort} = require('../controllers/cohort')

const cohortRouter = Router();

cohortRouter.get('/', getCohorts)
cohortRouter.post('/', createCohort)
cohortRouter.get('/:id', getCohortById)
cohortRouter.put('/:id/update', updateCohort)
// cohortRouter.delete('/:id', deleteCohort)



module.exports = cohortRouter