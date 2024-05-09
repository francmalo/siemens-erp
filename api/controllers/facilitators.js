const {Facilitator} = require('../models');
const facilitator = require('../models/facilitator');



module.exports.getFacilitators = async (req, res) =>{
    let facilitators
    try{
    facilitators = await Facilitator.findAll({order: [['createdAt', 'DESC']]})

    if (!facilitators || facilitators.length === 0) {
        res.status(200).json({ message: 'No facilitators found yet' });
      } else {
        res.status(200).json(facilitators);
      }    
        }catch(error){
    res.status(500).json({error:error.message})
        }

}
module.exports.createFacilitator  = async(req, res) =>{
    const facilitator = req.body
    console.log(facilitator)
    try{
    const createFacilitator = await Facilitator.create(facilitator)
     res.status(200).json(createFacilitator)
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

module.exports.getFacilitatorById = async (req, res)=>{
    const {id} = req.params
    try{
      const facilitator =await Facilitator.findOne({where: {uuid : id}})
      if (!facilitator){
        res.status(404).json({message: 'facilitator not found'})
      }
      res.status(200).json(facilitator)

    }catch(error){
      res.status(500).json({error:error.message})
    }
    
}

module.exports.search = async (req, res) => {

    const { idNo, name } = req.body;
    let facilitator = null;
    try {
      if (idNo) {
        facilitator = await Facilitator.findAll({
          where: {
            idNo
          },
        });
      } else if (id) {
        facilitator = await Facilitator.findAll({
          where: {
            idNo
          },
        });
      } else if (name) {
        facilitator = await Facilitator.findAll({
          where: {
            name: { [Op.like]: `%${name}%` },
          },
        });
      }
  
      if (!facilitator || facilitator.length === 0) {
        return res.status(404).json({ error: 'facilitator not found' });
      }
  
      res.status(200).json(facilitator);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  module.exports.updateFacilitator = async (req, res) => {
    const { id} = req.params
    const {firstName, lastName, email, phoneNo  } = req.body

    try{
      const facilitator = await Facilitator.findOne({where: {uuid: id}});
      
      const updateFacilitator = await Facilitator.update(
        {
        firstName: firstName || facilitator.firstName,
        lastName: lastName || facilitator.lastName,
        email: email || facilitator.email,
        phoneNo: phoneNo || facilitator.phone, 
        },
        {
          where: {uuid: id}

      })
      if(!updateFacilitator){
        res.status(400).json({message: "Bad request.Try again later"})
      }

      res.status(200).json({message: "facilitator information successfully updated"})
    }
  catch(error){
    res.status(500).json({error:error.message})
  }
}

module.exports.deleteFacilitator = async(req, res)=>{
  const {id} = req.params

  try{
    const facilitator = await Facilitator.findOne({where: {uuid :id}})
    if(facilitator){
      const deleteFacilitator  = await Facilitator.destroy({where: {uuid :id}})
      if(deleteFacilitator){
        res.status(200).json({message: "facilitator record succcessfully deleted"})
      }
    }
  }catch(errror){
    res.status(500).json({error: error.message})
  }

}