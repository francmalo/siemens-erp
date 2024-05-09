const {Router} = require('express');
const facilitatorsRouter = Router();

const {getFacilitators, createFacilitator, getFacilitatorById, search, updateFacilitator, deleteFacilitator} = require('../controllers/facilitators');

facilitatorsRouter.get('/', getFacilitators);
facilitatorsRouter.post('/', createFacilitator);
facilitatorsRouter.get('/:id', getFacilitatorById);
facilitatorsRouter.post('/search', search);
facilitatorsRouter.put('/:id/update', updateFacilitator);
facilitatorsRouter.delete('/:id/delete', deleteFacilitator);



module.exports = facilitatorsRouter;