// DOM Elements
const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus');

//Show time
 function showTime() {
   let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

//Set AM or PM
const amPm = hour >= 12 ? 'PM' : 'AM';

//12 Hour formart
hour = hour % 12 || 12;

//Output time
time.innerHTML =`${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

setTimeout(showTime, 1000);
 }

//Add Zero
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//Set Bg and Greeting
function setBgGreet() {
  let today = new Date(),
  hour = today.getHours();

  if (hour < 12) {
    //Mornung
   document.body.style.backgroundImage = "url('../img/morning.png')";
    greeting.textContent = 'Good Morning';
  }else if (hour < 18) {
    //Afternoon
    document.body.style.backgroundImage = "url('../img/afternoon.png')";
    greeting.textContent = 'Good Afternoon';
  }else{
    //Evening
    document.body.style.backgroundImage = "url('../img/evening.png')";
    greeting.textContent = 'Good Evening,';
    document.body.style.color = 'white';
  }
}

//Get name
function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  }else {
    name.textContent = localStorage.getItem('name');
  }
}

//Set Name
function setName(e) {
  if (e.type === 'keypress') {
    //Mke sure enter is pressed
    if (e.which == 13 || e.keycode == 13) {
      localStorage.setItem( 'name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem( 'name', e.target.innerText);
  }
}

//Get focus
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]';
  }else {
    focus.textContent = localStorage.getItem('focus');
  }
}


name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

 //Run
showTime();
setBgGreet();
getName();
getFocus();
