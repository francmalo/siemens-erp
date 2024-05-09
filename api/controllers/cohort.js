const {Cohort} = require('../models');

module.exports.getCohorts = async(req, res)=>{
    let cohorts = {}
    try{
        
        cohorts = await Cohort.findAll({});
        res.status(200).json(cohorts)
    }catch(error){
        console.log("nothing to output")
    }
}

module.exports.createCohort = async(req, res)=>{
    const cohort = req.body
    try{
        const createStudent = await Cohort.create(cohort)

        res.status(200).json(createStudent)

    }catch(error){
        res.status(500).json({error:error.message})
    }
} 

module.exports.getCohortById = async (req, res)=>{
    const {id} = req.params
    // console.log(id)

     try{
        const cohort = await Cohort.findOne({where:{ uuid :id}})
         if(!cohort){
             res.status(404).json({message: 'Cohort not found'})
         }
         res.status(200).json(cohort) 
     }catch(error){
         res.status(500).json({error:error.message})
     }
    
    

}

module.exports.updateCohort = async (req, res) =>{
    const {id} = req.params
    const {cohortName, startDate, endDate} = req.body
    try{
        const cohort = await Cohort.findOne({where: {uuid :id}})
        // console.log(cohort)
        const updatedCohort = await Cohort.update({
            cohortName: cohortName || cohort.cohortName,
            startDate: startDate || cohort.startDate,
            endDate:endDate || cohort.endDate,
        },

            {
                where:{uuid:id}
            }

        )
        if(updatedCohort){
            res.status(200).json({message:"cohort information updated successfully"})
        }

    }catch(error){
        res.status(500).json({error:error.message})
    }
}

module.exports.deleteCohort = async (req, res)=>{
    const {id} = req.params

    try{
        const deleteCohort = await Cohort.destroy({where: {uuid: id}})

        if(deleteCohort){
            res.status(200).json({message: "Cohort information successfully deleted"})
        }
    }catch(error){
        res.status(500).json({error:error.message})
    }

}