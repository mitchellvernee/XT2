// Clockand Day function
function showTime(){
    // Defines the get date function
    var date = new Date();
    // H stands for hours. counting starts from 0 to 23 
    var h = date.getHours();
    // M stands for minutes. Counting starts from 0 to 59
    var m = date.getMinutes();
    // S stands for seconds. Counting starts from 0 to 59
    var s = date.getSeconds(); 
    // Var that states the post-meridiem
    var session = "AM";
    // Days of the week. Starts counting from 0
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


    if(h == 0){
        h = 12;
    }
    // Pm statement to change from AM to PM after number goes higher than 12
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    // if h is lower than 10 add zero
    if (h < 10){
        h = "0" + h;
    }
    else {
        h = "" + h;
    }
    // if m is lower than 10 add zero
    if (m < 10){
        m = "0" + m;
    }
    else {
        m = "" + m;
    }
    // if s is lower than 10 add zero
    if (s < 10){
        s = "0" + s;
    }
    else {
        s = "" + s;
    }
    // adds the var's together to form the time and date
    var time = h + ":" + m + ":" + s + " " + session + " - " + days[date.getDay()];
    // Post data in the HTML
    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;
    //Refresh time
    setTimeout(showTime, 1000);
    
}
// enables script
showTime();


var t = new Date().getHours();
if (t < 10) {
    document.body.style.backgroundColor="yellow";
} else if (t < 20) {
    document.body.style.backgroundColor="orange";
} else {
    document.body.style.backgroundColor="grey";
}

