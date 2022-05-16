const loginForm = document.querySelector(".loginForm");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const logoffBtn = document.getElementById("logoff");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"
const savedUsername = localStorage.getItem(USERNAME_KEY)

function loginSubmit(go){
    const username = loginInput.value;
    const date = new Date();
    const hour = date.getHours();
    go.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY,username);
    if (hour < 6) {
        greeting.innerText = `Good Night, ${username}`;
    }else if(hour < 10) {
        greeting.innerText = `Good Morning, ${username}`;
    }else if(hour < 18) {
        greeting.innerText = `Good Afternoon, ${username}`;
    }else if(hour < 24) {
        greeting.innerText = `Good Evening, ${username}`;
    }
    greeting.classList.remove(HIDDEN_CLASSNAME);
    logoffBtn.classList.remove(HIDDEN_CLASSNAME);
};

function logoff(){
    localStorage.removeItem(USERNAME_KEY);
    window.location.reload();
};
function actLogoff(){
    logoffBtn.classList.add("flash");
};
function deactLogoff(){
    logoffBtn.classList.remove("flash");
};

if(localStorage.getItem(USERNAME_KEY) === null){
    loginForm.addEventListener("submit",loginSubmit);
}else{
    const date = new Date();
    const hour = date.getHours();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    if (hour < 6) {
        greeting.innerText = `Good Night, ${savedUsername}`;
    }else if(hour < 10) {
        greeting.innerText = `Good Morning, ${savedUsername}`;
    }else if(hour < 18) {
        greeting.innerText = `Good Afternoon, ${savedUsername}`;
    }else if(hour < 24) {
        greeting.innerText = `Good Evening, ${savedUsername}`;
    }
    greeting.classList.remove(HIDDEN_CLASSNAME);
    logoffBtn.classList.remove(HIDDEN_CLASSNAME);
};

logoffBtn.addEventListener("click",logoff);
logoffBtn.addEventListener("mouseover",actLogoff);
logoffBtn.addEventListener("mouseout",deactLogoff);
logoffBtn.addEventListener("mouseover",actLogoff);
logoffBtn.addEventListener("mouseout",deactLogoff);
//const loginButton2 = document.querySelector(".loginForm button")
