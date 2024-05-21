const express = require('express')
const cors = require('cors')
require('dotenv').config();
const studentRouter = require('./routes/students')
const cohortRouter = require('./routes/cohort')
const levelRouter = require('./routes/level')
const staffRouter = require('./routes/staff')
const facilitatorsRouter = require('./routes/facilitator')
const userRouter = require('./routes/users')

const app = express()
const PORT = process.env.PORT  || 3000

app.use(cors())
app.use(express.json())

app.use('/users', userRouter)
app.use('/facilitators', facilitatorsRouter)
app.use('/staffs', staffRouter )
app.use('/levels', levelRouter)
app.use('/cohorts', cohortRouter)
app.use('/students', studentRouter)




app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})