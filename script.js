    "use strict";
    
    let name = "Anthony";
    let age = 27;
    let birthday = "March 11th";
    let detroitGC = true;
    let lifeEvents = [
    "I was born in South Lyon, MI",
    "I went to Michigan State","I went to London with my high school marching band for New Year's Day Parade",
    "I'm a graduate of the C# bootcamp and current student of the front end bootcamp."];

    if(detroitGC){
        console.log(`My name is ${name} and I am a student at Grand Circus in Detroit, Michigan.I am currently ${age} years old and my birthday is on ${birthday}.`);
     }
   else{
        console.log(`My name is ${name} and I am a student at Grand Circus in Grand Rapids,
        Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
       }

  for(let i= 0;i<=lifeEvents.length-1;i++){
    //   "i" can be used to access the elements in the array
    console.log(lifeEvents[i]);
}
// console.log("4.");
 let counter = 0;
 while(true){
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    // OR let randomNumber = Math.floor(Math.random() * 10 +1);
    if(randomNumber !== 5){
    counter++;
    console.log(`${randomNumber} !== 5`);
 }
 else{
     counter++;
     console.log(`5 === 5. It took ${counter} iterations to randomly generate the number 5.`);
     break;
}
}