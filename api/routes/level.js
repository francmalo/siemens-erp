const {Router} = require('express')
const {getLevels, createLevel, getLevelById } = require('../controllers/level')

levelsRouter = Router()

levelsRouter.get('/', getLevels)
levelsRouter.post('/', createLevel)
levelsRouter.get('/:id', getLevelById)
// levelsRouter.put('/:id', updateLevel)
// levelsRouter.delete('/:id', deleteLevel)

module.exports = levelsRouter;