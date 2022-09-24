function startTrafficSignal () {
    let green=document.getElementById("green");
    let red=document.getElementById("red");
    let yellow=document.getElementById("yellow");

    //yellow light stays on for 1 second
    setTimeout(function () {
        green.style.opacity=.3;
        red.style.opacity=.3;
        yellow.style.opacity=1;
    },1000);

    //red light stays on for 3 seconds
    setTimeout(function () {
        green.style.opacity=.3;
        red.style.opacity=1;
        yellow.style.opacity=.3;
    },3000);

    //green light stays on for 8 seconds
    setTimeout(function () {
        green.style.opacity=1;
        red.style.opacity=.3;
        yellow.style.opacity=.3;
    },8000);
}

//cycle of traffic lights run for 12 seconds
let timer=setInterval(function () {
    startTrafficSignal();
},12000);

startTrafficSignal();