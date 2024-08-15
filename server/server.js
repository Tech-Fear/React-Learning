const express=require('express');
const app=express();
const cors=require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.post('/sellerSignUp',(req,res)=>{
    console.log(req.body);
    res.status(200).send({message:"Sign up successful"});
})

app.post('/verifyOtp',(req,res)=>{
    console.log(req.body);
    res.status(200).send({message:"OTP verified"});
})

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
});
