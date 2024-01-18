let person = prompt("Please enter your name", "Cowfefe");

let text = "Hello " + person + "! You are welcome?";

document.querySelector("#namebar").innerHTML = text;

function startTime() {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let d = today.getDay();
    let day = weekday[d];
    m = checkTime(m);
    s = checkTime(s);
    document.querySelector("#time").innerHTML =  h + ":" + m + ":" + s + " - " + day;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
  }