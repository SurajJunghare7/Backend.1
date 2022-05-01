// const fs = require("fs");

// const path = require("path");

// console.log(fs);

// core modules in node js

// 1. fs(file system) module

// // create a file by using fs module

// fs.writeFileSync("demo.text","sample file created by node")

// //2.how to update a file

// fs.appendFileSync("demo.text","jikdnvgjz,dvlk");

// //3. read a file

// const content = fs.readFileSync("demo.text","utf8")
// console.log(content);

// // 4. delete specific content from a file
// fs.uppendFileSync("demo.text","\n unwanted content");

// delete a file completely
// fs.unlinkSync("demo.text");

// 5. rename a file

// fs.rename("demo.text","renamed.text",func);

// example: 
// fs.rename('demo.txt', 'demo_old.txt', function (err) {
//     if (err) throw err;
//     console.log('File Renamed.');
//   });

// read all files within a directory/Folder

// fs.readdir("files",(err,files)=> {
//     if(!err){
//         console.log(files);
//     }else{
//         console.log(err);
//     }
// });



// 2..path modeule

// console.log(path.extention("demo.text"));

// console.log(path.dirname("/files/files.text"));

// console.log(path.basename("/files/files.text"));

// console.log(__dirname)...........it is also called global

// console.log(__filename)........path with file names

// console.log(path.basename(__filename))............it gives a file names

//  os module is used to access the information about operating system

console.log(process.argv[2]);