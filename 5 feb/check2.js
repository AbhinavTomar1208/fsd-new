function myfunction(){
    console.log("Starting a task...");
    setTimeout(() => {
    let sum=0;
    for(let i=0;i<10000000000;i++){
        sum+=i;
    }
    console.log("Task finished!");
    console.log("Result:", sum);
    }, 0);
}
console.log("Before function call");
let result=myfunction();
console.log("After function call");
console.log("Result:", result);