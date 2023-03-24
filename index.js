const express = require("express");
const app = express();
const PORT = 8001;
const fs = require("fs");
const path = require("path");
app.listen(PORT,()=>console.log(`The server started in ${PORT}`));

app.post("/creatingfiles",(request,response)=>{
    console.log(__dirname);  
    // creating folder using mkdir.
    const folderPath = path.join(__dirname,"dateTime");
    fs.mkdir(folderPath,(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("Folder created successfully")
        }
    })
    const filePath = path.join(folderPath,"dateTime.txt")
    console.log("folderpath",folderPath);
    const currentDateTime = new Date().toLocaleString();
    fs.writeFile(filePath,currentDateTime,(err)=>{
        if(err){
           response.status(400).send("Error creating file")
        }else{
           response.send("File successfully created")
        }
    })
}) 

app.get("/datetime",(request,response)=>{
    const filePath = path.join(__dirname,"dateTime/dateTime.txt");
    fs.readFile(filePath,(err)=>{
        if(err){
            response.status(400).send("Error reading data");
        }else{
            response.sendFile(filePath);
        }
    })
})

