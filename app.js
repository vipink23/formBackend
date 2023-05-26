
import  express  from 'express'
import mongoose from 'mongoose'
const app = express()
import cors from 'cors'
app.use(cors())
import userRouter from './Routes/UserRoutes.js'

const port =3002
mongoose.set('strictQuery',true)


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/form');
      console.log("connected");
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  main().catch(err => console.log(err));
  app.use(express.json())


  app.use('/' ,userRouter)  