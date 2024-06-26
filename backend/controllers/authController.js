import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import  Jwt  from "jsonwebtoken";

// user registration
export const register=async(req,res)=>{
    try {

        const salt=bcrypt.genSaltSync(10);
        const hash=bcrypt.hashSync(req.body.password,salt);

        const newUser=new User({
            username:req.body.username,
            email:req.body.email,
            password:hash,
            photo:req.body.photo
        })
        await newUser.save()
        res.status(200).json({success:true,message:'Sucessfully created'});
    } catch (error) {
        res.status(500).json({success:false,message:'fail to create try again'});
        

    }
}


// user login
export const login=async(req,res)=>{

    const email=req.body.email
    try {
        const user=await User.findOne({email});

        // if does not exist
        if(!user){
            return res.status(404).json({success:false,message:'User not found'})
        }
        // if user is exist then chek the password or compare the passwor
        const chekCorrectPassword=await bcrypt.compare(req.body.password,user.password);

        if(!chekCorrectPassword){
            return res.status(401).json({success:false,message:"Incorrect email or password"});
        }

         const {password , role, ...rest}=user._doc

            // create jwt token
            const token=Jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET_KEY,{expiresIn:"15d"});

            //set token in the browser cookies and send the response to the client

            res.cookie('accessToken' , token ,{
                httpOnly:true,
                expires:token.expiresIn
            }).status(200).json({
                token,
                data:{...rest},
                role,
            })

     
    
    } catch (error) {

        return res.status(401).json({success:false,message:"Failed to login"});
    }
}




