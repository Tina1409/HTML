console.log("This is module");
function average(arr){
    let sum=0;
    arr.forEach(element=>{
        sum +=element;
    })
    return sum/arr.length;
}

// exported a whole function
// module.exports= average;

// object created to be exported 
module.exports= {
    avg: average,
    name: "tina",
    repo:"github"
};