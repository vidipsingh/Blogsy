import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'
import bcrypt from 'bcrypt';
import { nanoid } from 'nanoid';
import jwt from 'jsonwebtoken';
import cors from 'cors';


// Schemas
import User from './Schema/User.js';

const server = express();
let PORT = 3000;

let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password

// middleware
server.use(express.json());
server.use(cors());

// connecting to DB
mongoose.connect(process.env.DB_LOCATION, {
    autoIndex: true
})


const formatDatatoSend = (user) => {

    const access_token = jwt.sign({ id: user._id }, process.env.SECRET_ACCESS_KEY) //for making a unique access token by jwt

    return{
        access_token,
        profile_img: user.personal_info.profile_img,
        username: user.personal_info.username,
        fullname: user.personal_info.fullname
    }
}

const generateUsername = async (email) => {
    let username = email.split("@")[0]; //in here if provided asd@gmail.com -> [asd, gmail] -> asd - username

    let isUsernameNotUnique = await User.exists({ "personal_info.username": username }).then((result) => result)

    isUsernameNotUnique ? username += nanoid().substring(0, 10) : ""; //for generating a random string so that the username can be unique

    return username

}

// POST req for signup page
// server.post('/signup', (req, res) => {
//     // destructuring fullname, email, password from json body
//     let { fullname, email, password } = req.body;
    
//     // validating the data from frontend
//     if(fullname.length < 3) {
//         return res.status(403).json({ "error": "Fullname must be at least 3 letters long" })
//     }
//     if(!email.length){
//         return res.status(403).json({ "error": "Enter Email" })
//     }
//     if(!emailRegex.test(email)){
//         return res.status(403).json({ "error": "Email is invalid" })
//     }
//     if(!passwordRegex.test(password)){
//         return res.status(403).json({ "error": "Password should be 6 to 20 characters long with a numeric, 1 lowercase and 1 uppercase letters" });
//     }

//     // hashing the info
//     // bcrypt.hash(password, 10, async (err, hashed_password) => {

//         let username = generateUsername(email);
       
//         let user = new User({
//             personal_info: { fullname, email, hashed_password, username }
//         })

//         user.save().then((u) => {
//             return res.status(200).json(formatDatatoSend(u))
//         })
//         .catch(err => {
//             if(err.code == 11000) {
//                 return res.status(500).json({ "error": "Email already exists" })
//             }

//             return res.status(500).json({ "error": err.message })
//         })
        
//     // })
// })

// server.post('/signin', (req, res) => {
//     // destrucuturing email and password from req.body
//     let { email, password } = req.body;

//     // finding One data from DB 
//     User.findOne({ "personal_info.email": email })
//     .then((user) => {
//         if(!user){
//             return res.status(403).json({ "error": "Email not found" })
//         }
        
//         bcrypt.compare(password, user.personal_info.password, (err, result) => {

//             if(err) {
//                 return res.status(403).json({ "error": "Error occured while login please try again" });
//             }

//             if(!result) {
//                 return res.status(403).json({ "error": "Incorrect Password" })
//             }else {
//                 return res.status(200).json(formatDatatoSend(user))
//             }

//         })

        
//     })
//     .catch(err => {
//         console.log(err);
//         return res.status(500).json({ "error": err.message })
//     })
// })

// POST req for signup page
server.post("/signup", async (req, res) => {
    // destructuring fullname, email, password from json body
    let { fullname, email, password } = req.body;
  
    // validating the data from frontend
    if (fullname.length < 3) {
      return res.status(403).json({ "error": "Fullname must be at least 3 letters long" });
    }
    if (!email.length) {
      return res.status(403).json({ "error": "Enter Email" });
    }
    if (!emailRegex.test(email)) {
      return res.status(403).json({ "error": "Email is invalid" });
    }
    if (!passwordRegex.test(password)) {
      return res.status(403).json({
        "error":
          "Password should be 6 to 20 characters long with a numeric, 1 lowercase and 1 uppercase letters", 
      });
    }
  
    let username = await generateUsername(email);
  
    let user = new User({
      personal_info: { fullname, email, password, username },
    });
  
    user.save()
      .then((u) => {
        return res.status(200).json(formatDatatoSend(u));
      })
      .catch((err) => {
        if (err.code === 11000) {
          return res.status(500).json({ "error": "Email already exists" });
        }
  
        return res.status(500).json({ "error": err.message });
      });
  });
  
  server.post("/signin", (req, res) => {
    // destrucuturing email and password from req.body
    let { email, password } = req.body;
  
    // finding One data from DB
    User.findOne({ "personal_info.email": email })
      .then((user) => {
        if (!user) {
          return res.status(403).json({ "error": "Email not found" });
        }
  
        if (user.personal_info.password !== password) {
          return res.status(403).json({ "error": "Incorrect Password" });
        } else {
          return res.status(200).json(formatDatatoSend(user));
        }
      })
      .catch((err) => {
        console.log(err);
  
        return res.status(500).json({ "error": err.message });
      });
  });

server.listen(PORT, () => {
    console.log('Listening on Port: ' + PORT);
    
})