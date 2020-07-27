let hours = 45 ;
let wages = 30;
let pay= 0;

if(hours <= 40){
    pay = hours * wages;
    console.log(`Current Pay: $${pay}`);
}
else{
    let regularHours = 40 * wages; 
    let overtime = (regularHours - 40) * 1.50;
    pay = regularHours + overtime;
    console.log(`Overtime: $${pay}`);
}

//Weeks

