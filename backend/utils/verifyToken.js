// import jwt from 'jsonwebtoken'

// export const verifyToken=(req,res,next)=>{
    
//     const token=req.cookies.accessToken;
    
//     if(!token){
//         return res.status(401).json({success:false,message:"you are not authorised"})
//     }

//     //if token is exist then veryfy the token
//     jwt.verify(token,process.env.JWT_SECRET_KEY,(err,user)=>{
//         if(err)
//         return res.status(401).json({success:false , message:"token is invaild"});
//     })
//     req.user=user
//     next();
// }


// export const verifyUser=(req,res,next)=>{
//     verifyToken(req,res,next,()=>{
//         if(req.user.id===req.params,id || req.user.role==="admin"){
//             next()
//         }
//         else{
//            return  res.status( 401).json({success:false,message:"You are not authnticated"});
//         }
//     })
// }


// export const verifyAdmin=(req,res,next)=>{
//     verifyToken(req,res,next,()=>{
//         if(req.user.role==="admin"){
//             next()
//         }
//         else{
//            return  res.status( 401).json({success:false,message:"You are not authorize"});
//         }
//     })
// }



import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    const token = req.cookies.accessToken;
   console.log(token)
    
    if (!token) {
        return res.status(401).json({success: false, message: "You  are not authorized"});
    }

    // If token exists then verify the token
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decodedUser) => {
        if (err) {
            return res.status(401).json({success: false, message: "Token is invalid"});
        }

        req.user = decodedUser; // Attach the decoded user to the request object
        next();
    });
};

export const verifyUser = (req, res, next) => {
    verifyToken(req, res,next, () => {
        if (req.user.id == req.params.id || req.user.role == "admin") {
            next();
        } else {
            return res.status(401).json({success: false, message: "You  are not authenticated"});
        }
    });
};

export const verifyAdmin = (req, res, next) => {
    //console.log(req.user.role)
    verifyToken(req, res, () => {
      //  console.log(req.user.role)
        if (req.user.role =="user") {
            next();
        } else {
            return res.status(401).json({success: false, message: "You hello are not authorized"});
        }
    });
};

