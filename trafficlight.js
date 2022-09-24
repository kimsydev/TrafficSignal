function startTrafficSignal () {
    let green=document.getElementById("green");
    let red=document.getElementById("red");
    let yellow=document.getElementById("yellow");

    // green.style.opacity=1;
    setTimeout(function () {
        green.style.opacity=.3;
        red.style.opacity=.3;
        yellow.style.opacity=1;
    },1000);

    setTimeout(function () {
        green.style.opacity=.3;
        red.style.opacity=1;
        yellow.style.opacity=.3;
    },3000);

    setTimeout(function () {
        green.style.opacity=1;
        red.style.opacity=.3;
        yellow.style.opacity=.3;
    },8000);
}

let timer=setInterval(function () {
    startTrafficSignal();
},12000);

startTrafficSignal();