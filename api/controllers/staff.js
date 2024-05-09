const {Staff} = require('../models');



module.exports.getStaff = async (req, res) =>{

    try{
    const staffs = await Staff.findAll({order: [['createdAt', 'DESC']]})
     res.status(200).json(staffs)
    
}catch(error){
    res.status(500).json({error:error.message})
}

}
module.exports.createStaff  = async(req, res) =>{
    const staff = req.body
    console.log(staff)
    try{
    const createStaff = await Staff.create(staff)
     res.status(200).json(createStaff)
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

module.exports.getStaffById = async (req, res)=>{
    const {id} = req.params
    try{
      const staff =await Staff.findOne({where: {uuid : id}})
      if (!staff){
        res.status(404).json({message: 'Staff not found'})
      }
      res.status(200).json(staff)

    }catch(error){
      res.status(500).json({error:error.message})
    }
    
 }

// module.exports.search = async (req, res) => {
//     const { regNo, idNo, name } = req.body;
//     console.log(regNo, idNo, name);
//     let students = null;
//     try {
//       if (regNo) {
//         students = await Student.findAll({
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
//   module.exports.updateStudent = async (req, res) => {
//     const { id} = req.params
//     const {firstName, lastName, email, phone ,feePayment } = req.body

//     try{
//       const student = await Student.findOne({where: {uuid: id}});
//       // res.json(student)
//       const updateStudent = await Student.update(
//         {
//         firstName: firstName || student.firstName,
//         lastName: lastName || student.lastName,
//         email: email || student.email,
//         phone: phone || student.phone,
//         feePayment: feePayment || student.feePayment 
//         },
//         {
//           where: {uuid: id}

//       })
//       if(!updateStudent){
//         res.status(400).json({message: "Bad request.Try again later"})
//       }

//       res.status(200).json({message: "Student information successfully updated"})
//     }
//   catch(error){
//     res.status(500).json({error:error.message})
//   }
// }

// module.exports.deleteStudent = async(req, res)=>{
//   const {id} = req.params

//   try{
//     const student = await Student.findOne({where: {uuid :id}})
//     if(student){
//       const deleteStudent  = await Student.destroy({where: {uuid :id}})
//       if(deleteStudent){
//         res.status(200).json({message: "Student record succcessfully deleted"})
//       }

//     }

//   }catch(errror){
//     res.status(500).json({error: error.message})
//   }

// }