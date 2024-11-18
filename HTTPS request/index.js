import express from 'express';
const app = express();
const port= 3000;

app.get("/",(req,res)=>{
    res.send("<h1>Hello!</h1>")
    
})
app.get("/Home",(req,res)=>{
    res.send("<h1>Home!</h1>")
    
})
app.get("/contact",(req,res)=>{
    res.send("Contact Me!")
})
app.get("/Donate",(req,res)=>{
    res.send("Donate and help")
})

app.listen(port,()=>{
    console.log(`server started on port ${port}`);
    
})
