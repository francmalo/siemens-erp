
const { Op } = require('sequelize');
const {Student} = require('../models');
const Joi = require('joi')

const schema = Joi.object({

  email: Joi.string().email().required(),

})


module.exports.getStudents = async (req, res) =>{
    try{
    const students = await Student.findAll({order: [['createdAt', 'DESC']]})
    if(!students){
        res.status(504).json({message: 'Students not found'})
    }
    if(students.length === 0){
        res.status(204).json({message:'No students in found yet'})
    }else{
        res.status(200).json(students)
    }
}catch(error){
    res.status(500).json({error:error.message})
}

}
module.exports.createStudent  = async(req, res) =>{
    const student = req.body

     // Validate the request body
     const { error } = studentSchema.validate(student);
     if (error) {
         return res.status(400).json({ error: error.details[0].message });
     }
 
    // console.log(student)
    try{
    const createStudent = await Student.create(student)
     res.status(200).json(createStudent)
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

module.exports.getStudentById = async (req, res)=>{
    const {id} = req.params
    try{
      const student =await Student.findOne({where: {uuid : id}})
      if (!student){
        res.status(404).json({message: 'Student not found'})
      }
      res.status(200).json(student)

    }catch(error){
      res.status(500).json({error:error.message})
    }
}

// module.exports.search = async (req, res) => {
//     const {  idNo, name } = req.body;
//     console.log(regNo, idNo, name);
//     let students = null;
//     try {
//       if (regNo) {
//         students = await Staff.findAll({
//           where: {
//             regNo
//           },
//         });
//       } else if (id) {
//         students = await Student.findAll({
//           where: {
//             idNo
//           },
//         });
//       } else if (name) {
//         students = await Student.findAll({
//           where: {
//             name: { [Op.like]: `%${name}%` },
//           },
//         });
//       }
  
//       if (!students || students.length === 0) {
//         return res.status(404).json({ error: 'Student not found' });
//       }
  
//       res.status(200).json(students);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   };


module.exports.search = async (req, res) => {
  const { name } = req.query; // Get the search query from the request query parameters

  try {
    if (name) {
      const students = await Student.findAll({
        where: {
          [Op.or]: [
            { firstName: { [Op.like]: `%${name}%` } },
            { lastName: { [Op.like]: `%${name}%` } },
          ],
        },
      });

      if (!students || students.length === 0) {
        return res.status(404).json({ error: 'Student not found' });
      }

      res.status(200).json(students);
    } else {
      // If no search query is provided, return all students
      const students = await Student.findAll({ order: [['createdAt', 'DESC']] });
      res.status(200).json(students);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


  module.exports.updateStudent = async (req, res) => {
    const { id} = req.params
    const {firstName, lastName, email, phone ,feePayment } = req.body

    try{
      const student = await Student.findOne({where: {uuid: id}});
      // res.json(student)
      const updateStudent = await Student.update(
        {
        firstName: firstName || student.firstName,
        lastName: lastName || student.lastName,
        email: email || student.email,
        phone: phone || student.phone,
        feePayment: feePayment || student.feePayment 
        },
        {
          where: {uuid: id}

      })
      if(!updateStudent){
        res.status(400).json({message: "Bad request.Try again later"})
      }

      res.status(200).json({message: "Student information successfully updated"})
    }
  catch(error){
    res.status(500).json({error:error.message})
  }
}

module.exports.deleteStudent = async(req, res)=>{
  const {id} = req.params

  try{
    const student = await Student.findOne({where: {uuid :id}})
    if(student){
      const deleteStudent  = await Student.destroy({where: {uuid :id}})
      if(deleteStudent){
        res.status(200).json({message: "Student record succcessfully deleted"})
      }

    }

  }catch(errror){
    res.status(500).json({error: error.message})
  }

}