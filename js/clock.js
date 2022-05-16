const clock = document.querySelector("h2.clock");
function timeCheck (){
    const date = new Date();
    const hour = String(date.getHours()).padStart(2,"0");
    const minute = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2,"0");
    clock.querySelector(".hour").innerText = `${hour}`;
    clock.querySelector(".dot1").innerText = ":";
    clock.querySelector(".minute").innerText = `${minute}`;
    clock.querySelector(".dot2").innerText = ":";
    clock.querySelector(".second").innerText = `${second}`;
};

timeCheck ()
setInterval(timeCheck, 1000);