document.querySelector('button').addEventListener("click", function() {
    
var hours = Number(document.getElementById("hours").value);    
var minutes = document.getElementById("minute").value;
var seconds = document.getElementById("second").value;


//check if the amount in minutes input are bigger than 59    
if (minutes > 59) {

//if is bigger than 59 add an hour and the reaminder leave it in minutes input   
    hours += Number(Math.floor(minutes / 60));
    minutes = minutes % 60;
}
    
    
    
var nIntervId = setInterval(function() {
    seconds -= 1
    if (seconds < 0) {
       seconds = 59;

//if the seconds reach less that 0 run fucntion in line 31
       changeMinute();
        
//add a 0 to the left when a seconds reach a single digit
    } else if (seconds < 10 && seconds > 0){
        seconds = "0" + seconds;
    }
    
//run the function in line 42 to retrive the numbers in the website
   count();
    
//run the setinterval every second
}, 1000);

    
//minutes function
function changeMinute() {
     minutes -= 1;
}

//stop the setInteval wheen the time runs out
setTimeout(()=> { clearInterval(nIntervId); }, minutes * 60000 + seconds * 1000);

function count() {
    document.getElementById("hours").value = hours;
    document.getElementById("minute").value = minutes;
    document.getElementById("second").value = seconds;
}
    
});