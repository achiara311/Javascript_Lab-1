let hours = 45 ;
let wages = 30;
let pay= 0;

if(hours <= 40){
    pay = hours * wages;
    console.log(`Current Pay: $${pay}`);
    let weeks= Math.ceil(10000000/regularHours);
    console.log(`With wage=${wage} and hours=${hours} it would take ${weeks} weeks.`)
}
else{
    let regularHours = 40 * wages; 
    let overtime = (regularHours - 40) * (wage*1.50);
    pay = regularHours + overtime;
    console.log(`Overtime: $${pay}`);
    let weeks= Math.ceil(10000000/regularHours);
    console.log(`With wage=${wage} and hours=${hours} it would take ${weeks} weeks.`)
}

//Weeks
let weeks=10000000/regularHours;
console.log(`With wage=${wage} and hours=${hours} it would take ${weeks} weeks.`)
