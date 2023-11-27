const fs= require("fs");
let text= fs.readFileSync("text.txt","utf-8");
text = text.replace("content","tina");
console.log("The content of the file is \n ");
console.log(text);

console.log("creating a new file");
fs.writeFileSync("tina.txt",text);

let content="hello world"
fs.writeFileSync("tina1.txt",content);
let text1= fs.readFileSync("tina1.txt","utf-8");
console.log(text1);