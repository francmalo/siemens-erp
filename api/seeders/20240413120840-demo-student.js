'use strict';

 /** @type {import('sequelize-cli').Migration} */
 module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Students', [{
       firstName: 'John1',
       lastName: 'Doe',
       email: 'johnDoe3.gmail.com',
       phone:1222352,
       regNo:'12345682',
       kcseNo: '122144134/2024',
       idNo:12345692,
       feePayment:'paid',
       examResults:'pass',
       createdAt: new Date(),
       updatedAt:new Date(),


     },
     {
      firstName: 'ALLAN MULWA',
      lastName: 'KYALO',
      email: 'Kyaloallan19@gmail.com',
      phone: 708066838,
      regNo: 'E124-01-0061/2024',
      kcseNo: '1930010028/2018',
      feePayment:'paid',
      examResults: 'PASS',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'BRIAN KIPRONO',
      lastName: 'SAMOEI',
      email: 'Briankiprono0022@gmail.com',
      phone: 757763657,
      regNo: 'E124-01-0075/2024',
      kcseNo: '2400001202/2020',
      feePayment:'paid',
      examResults: 'PASS',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  {
    firstName: 'ANTHONY MCHARIA',
    lastName: 'NJOKI',
    email: 'Anthonymachari.am.am@gmail.com',
    phone: 790906488,
    regNo: 'E124-01-0059/2024',
    kcseNo: '3054401003/2016',
    feePayment:'paid',
    examResults: 'PASS',
    createdAt: new Date(),
    updatedAt: new Date()
  },
{
  firstName: 'HIRAM BERE',
  lastName: 'KINUTHIA',
  email: 'hiramkin@gmail.com',
  phone: 710392087,
  regNo: 'E124-01-0056/2024',
  feePayment:'paid',
  kcseNo: '03106106065/2012',
  examResults: 'PASS',
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  firstName: 'JEFF VINCENT',
  lastName: 'NDICHU NGUGI',
  email: 'vincentndichu24@gmail.com',
  phone: 796317731,
  regNo: 'E124-01-0057/2024',
  kcseNo: '09203401047/2018',
  examResults: 'PASS',
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  firstName: 'KELVIN KAMAU',
  lastName: 'KIBOI',
  email: 'kamaukiboi@gmail.com',
  phone: 741146423,
  regNo: 'E124-01-0058/2024',
  kcseNo: '10236103017/2017',
  feePayment:'paid',
  examResults: 'PASS',
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  firstName: 'COLLINS',
  lastName: 'KAMAU',
  email: 'Collins kamau@gmail.com',
  phone: 725705400,
  regNo: 'E124-01-0053/2024',
  kcseNo: '11200003408/2021',
  feePayment:'paid',
  examResults: 'PASS',
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  firstName: 'TONY CLINTON',
  lastName: 'MUTUMA',
  email: 'mutumatony@yahoo.com',
  phone: 746415183,
  regNo: 'E124-01-0054/2024',
  kcseNo: '15319101123/2019',
  feePayment:'paid',
  examResults: 'FAIL',
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  firstName: 'JOEY KANYI',
  lastName: 'MUTHONI',
  email: 'Joeykanyi15133@gmail.com',
  phone: 115757667,
  regNo: 'E124-01-0055/2024',
  kcseNo: '20400004165/2021',
  feePayment:'paid',
  examResults: 'PASS',
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  firstName: 'RENOX',
  lastName: 'KIPLANGAT',
  email: 'langatrenox@gmail.com',
  phone: 791228781,
  regNo: 'E124-01-0060/2024',
  kcseNo: '25583117003/2018',
  feePayment:'paid',
  examResults: 'PASS',
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  firstName: 'JOEL',
  lastName: 'BULTUT',
  email: 'calvinbultut@gmail.com',
  phone: 741355101,
  regNo: 'E124-01-0076/2024',
  kcseNo: '27500008024/2018',
  feePayment:'paid',
  examResults: 'PASS',
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  firstName: 'KIPLAGAT',
  lastName: 'KEMBOI',
  email: 'Kiplangat95@gmail.com',
  phone: 725937862,
  regNo: 'E124-01-0052/2024',
  kcseNo: '27565202092/2012',
  feePayment:'paid',
  examResults: 'PASS',
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  firstName: 'VICTOR',
  lastName: 'OMOLO',
  email: 'obarevicky@gmail.com',
  phone: 768187831,
  regNo: 'E124-01-0078/2024',
  kcseNo: '29500006040/2021',
  feePayment:'paid',
  examResults: 'PASS',
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  firstName: 'FELIX',
  lastName: 'LIVANZE',
  email: 'felivanze@gmail.com',
  phone: 729840862,
  regNo: 'E124-01-0077/2024',
  kcseNo: '38622101008/2014',
  feePayment:'paid',
  examResults: 'PASS',
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  firstName: 'WALTER',
  lastName: 'OUMA',
  email: 'Walter45oyugi@gmail.com',
  phone: 741827678,
  regNo: 'E124-01-0074/2024',
  kcseNo: '39741005027/2018',
  feePayment:'paid',
  examResults: 'PASS',
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  firstName: 'DAVID',
  lastName: 'MUTAI',
  email: 'davillila176@gmail.com',
  phone: 7769215736,
  regNo: 'E124-01-0082/2024',
  kcseNo: '11200003174/2021',
  feePayment:'paid',
  examResults: 'PASS',
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  firstName: 'ERIC',
  lastName: 'KIMANI',
  email: 'Eric.kimani@students.dkut.ac.com',
  phone: 799271684,
  regNo: 'E124-01-0090/2024',
  kcseNo: '11207101061/2018',
  feePayment:'paid',
  examResults: 'NOT SHOWN',
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  firstName: 'FIDEL',
  lastName: 'KIREGA',
  email: 'Taffg74@gmail.com',
  phone: 771538383,
  regNo: 'E124-01-0306/2023',
  kcseNo: '20400001018/2018',
  feePayment:'paid',
  examResults: 'PASS',
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  firstName: 'BILL',
  lastName: 'MANYATTA',
  email: 'bkmanyatta@gmail.com',
  phone: 763311507,
  regNo: 'E124-01-0126/2023',
  kcseNo: '101111002/2009',
  feePayment:'paid',
  examResults: 'PASS',
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  firstName: 'PATTY',
  lastName: 'MUTINDA',
  email: 'patty.mutinda22@students.dkut.ac.ke',
  phone: 715353836,
  regNo: 'E124-01-0142/2023',
  kcseNo: '44700006243/2016',
  feePayment:'paid',
  examResults: 'PASS',
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  firstName: 'RONALD',
  lastName: 'MWAU',
  email: 'ronaldmutua617@gmail.com',
  phone: 748688613,
  regNo: 'E124-01-0140/2024',
  kcseNo: '13300007021/2021',
  feePayment:'paid',
  examResults: 'PASS',
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  firstName: 'COLLINS',
  lastName: 'KIPLAGAT',
  email: 'kiplagatc2017@gmail.com',
  phone: 715465789,
  regNo: 'E124-01-0151/2024',
  kcseNo: '33517203054/2021',
  feePayment:'paid',
  examResults: 'PASS',
  createdAt: new Date(),
  updatedAt: new Date()
}], {})
    
   },

   async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Students', null, {})
  },
 };
