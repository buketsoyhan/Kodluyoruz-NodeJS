const fs = require('fs');

//Read File

fs.readFile("./password.txt", 'utf-8', (err,data)=>{
    if(err) console.log(err);
    console.log(data);
    console.log("The file was read");
})


//Write File

fs.appendFile("./password.txt", "\nHello Node JS", 'utf8', (err,data)=>{
    if(err) console.log(err);
    console.log("The file was write");
})

//Delete File

fs.unlink("./example.txt", (err)=>{
    if(err) console.log(err);
    console.log("The file was delete");
})

//Make Folder

fs.mkdir('uploads/img', {recursive:true}, (err)=>{
    if(err) console.log(err);
    console.log("The folder was created");
})