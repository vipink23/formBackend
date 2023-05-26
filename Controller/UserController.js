import userModel from '../Model/User.js'
import bcrypt from 'bcrypt'


const userSignup= async (req,res)=>{
    try{
        console.log(req.body);
        const {fullName,email,password}=req.body;
        if(fullName&&email&&password){
            const Email=await userModel.find({email:email});
            if(Email.length){
                res.send('email already exist')
            }else{
                const salt=await bcrypt.genSalt()
                const hashedPassword= await bcrypt.hash(password,salt)
             
                const user= new userModel({
                    fullName,
                    email,
                    password:hashedPassword
    
                })
                const a1= await user.save();
                res.json({a1,success:true})
            }
           
        }else{
            res.send('all feild must be')
        }
    }catch(err){
    res.send('err'+err)
    }
}

const usersignin= async (req,res)=>{
    try{
        console.log(req.body);
        const {email,password}=req.body;
        if(email&&password){
            const user=await userModel.findOne({email:email});
            console.log(user);
            if(user){
                console.log(user.password,password);
                
                const isMatched = await bcrypt.compare( password,user.password)
                console.log('helooooo')
                console.log(isMatched ,);
                if(isMatched){
                    res.json({status:true,user})
               
                }else{
                    res.send('password does not matched')
                }
            }else{
                res.send('email doesnot exist')  
            }
        }else{
            res.send('all feild must be')
        }
    }catch(err){
    res.send('err'+err)
    }
}



export default {userSignup,usersignin}