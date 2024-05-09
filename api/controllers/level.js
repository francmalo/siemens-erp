const { where } = require('sequelize');
const {Level} = require('../models');

module.exports.getLevels = async (req, res) => {
  try {
    const levels = await Level.findAll();
    res.json(levels);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.createLevel = async (req, res) => {
  const level = req.body;
  try {
    const createLevel = await Level.create(level);
    if (createLevel)
    res.status(200).json(createLevel);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports.getLevelById = async (req, res) => {
  const { id } = req.params;
  // console.log(id)
  try {
    const level = await Level.findOne({ where: { uuid : id } });
    if(!level){
      res.status(404).json({error: "The level does not exist"})
    }
    res.status(200).json(level)
    
  }catch(error){
    res.status(500).json({error: error.message})
  }

}

module.exports.updateLevel = async (req, res) => {
  const { id } = req.params;
  const level = req.body;
  try {
    const updateLevel = await Level.update(level, { where: { id } });
    if (!updateLevel) {
      return res.status(404).json({ error: 'Level not found' });
    }
    res.status(200).json(updateLevel);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
module.exports.deleteLevel = async (req, res) =>{
  const {id} = req.params
  try{
    const deleteLevel = await Level.destroy({where: {uuid : id}})

  }catch(error){
    res.status(500).json({error:error.message})
  }
}