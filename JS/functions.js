console.log("This is a tutorial of functions in java script ");

function greet(name,greetText="Greetings from java script to"){
    console.log(greetText+ " " + name );
    console.log(name + " is a good boy");
}

let name="saurabh";
let name1="sanchit";
let name2="harry potter";
let name3="jon snow";
let greetText="Good morning";

greet(name,greetText);
greet(name1,greetText);
greet(name2,greetText);
greet(name3);
