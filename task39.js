// const express = require("express")
// const app = express();
// const path = require("path") 
// const fs = require("fs")
// const PORT = 9000

// app.listen(PORT,()=>console.log(`server started localhost: ${PORT}`));

// const currentDir = path.join(__dirname,"express")
// //console.log(currentDir);

// const content = "hey iam from a file"
// fs.writeFile(`${currentDir}/express.txt`,content,(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("file created")
//     }
// })

// app.use(express.static("express"));

// app.get("/static",(req,res)=>{
//     res.sendFile(path.join(__dirname,"express/express.txt"))
// })

//======================================================================

// let date = new Date()
// console.log(date)
// let utc = date.toUTCString();
// console.log(utc);
// Wed, 15 Mar 2023 17:18:33 GMT

// let date = new Date().toLocaleString()
// console.log(date)
// let utc = date.toUTCString();
// console.log(utc);

//15/3/2023, 10:47:23 pm

//=====================================
//-------------------------------------------------------------------------------------------------
// const express = require("express");
// const app = express();
// const path = require("path");
// const fs = require("fs");
// const port = 8000;

// app.listen(port , ()=>console.log(`server started localhost:${port}`))

// const currentDir = path.join(__dirname,"date-time")
// //console.log(currentDir)

// fs.mkdir(`${currentDir}`,(err)=>{
//   if(err)
//   {
//     console.log(err);
//   }
//   else{
//     console.log('New folder created successfully');
//   }
// })
// //const content = console.log(new Date().toUTCString())
// let date = new Date()
// console.log(date)
// let utc = date.toUTCString();
// console.log(utc);
// // Wed, 15 Mar 2023 17:18:33 GMT

// fs.writeFile(`${currentDir}/date-time.txt`,utc,(err)=>{
//         if(err){
//             console.log(err)
//         }
//         else{
//             console.log("file created")
//         }
//     })

// app.get("/static",(req,res)=>{
//     res.sendFile(path.join(`${currentDir}`,"/date-time.txt"))
// })    
//============================================================================

// const express = require('express');
// const app = express();
// const fs = require('fs');
// const path = require('path');

// app.post('/create-text-file', (req, res) => {
//   // Get the folder path from the request body
//   const folderPath = req.body.folderPath;

//   // Create the file path
//   const filePath = path.join(folderPath, 'example.txt');

//   // Create the file and write some content to it
//   fs.writeFile(filePath, 'This is an example text file!', (err) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).send('Error creating file');
//     }
//     return res.send(`Text file created successfully at ${filePath}`);
//   });
// });

// app.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });
