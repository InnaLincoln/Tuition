let prev = document.querySelector('.slider .left-arrow');
let next = document.querySelector('.slider .right-arrow');

document.getElementById('first').addEventListener('click', firstItemActive);
document.getElementById('fourth').addEventListener('click', fourthItemActive);
document.getElementById('fifth').addEventListener('click', fifthItemActive);

function firstItemActive() {
  document.getElementById('first-img').setAttribute('src', 'img/icon-red.png');
  document.getElementById("first-block").classList.remove('not-active');
  document.getElementById("first-block").classList.add('active');
  document.getElementById("red-long-1").classList.add('display');
  document.getElementById('back').setAttribute('src', 'img/back1.jpg');
  fourthItemNotActive();
  fifthItemNotActive();
  secondItemNotActive();
}

function fourthItemActive() {
  document.getElementById('fourth-img').setAttribute('src', 'img/icon-red.png');
  document.getElementById("fourth-block").classList.remove('not-active');
  document.getElementById("fourth-block").classList.add('active');
  document.getElementById("red-long-4").classList.add('display');
  document.getElementById('back').setAttribute('src', 'img/back2.jpg');
  firstItemNotActive();
  fifthItemNotActive();
  secondItemNotActive();
}

function fifthItemActive() {
  document.getElementById('fifth-img').setAttribute('src', 'img/icon-red.png');
  document.getElementById("fifth-block").classList.remove('not-active');
  document.getElementById("fifth-block").classList.add('active');
  document.getElementById("red-long-5").classList.add('display');
  document.getElementById('back').setAttribute('src', 'img/back3.jpg');
  firstItemNotActive();
  fourthItemNotActive();
  secondItemNotActive();
}

function firstItemNotActive() {
  document.getElementById('first-img').setAttribute('src', 'img/icon.png');
  document.getElementById("first-block").classList.remove('active');
  document.getElementById("first-block").classList.add('not-active');
  document.getElementById("red-long-1").classList.remove('display');
  document.getElementById("red-long-1").classList.add('not-display');
}

function fourthItemNotActive() {
  document.getElementById('fourth-img').setAttribute('src', 'img/icon.png');
  document.getElementById("fourth-block").classList.remove('active');
  document.getElementById("fourth-block").classList.add('not-active');
  document.getElementById("red-long-4").classList.remove('display');
  document.getElementById("red-long-4").classList.add('not-display');
}

function fifthItemNotActive(){
  document.getElementById('fifth-img').setAttribute('src', 'img/icon.png');
  document.getElementById("fifth-block").classList.remove('active');
  document.getElementById("fifth-block").classList.add('not-active');
  document.getElementById("red-long-5").classList.remove('display');
  document.getElementById("red-long-5").classList.add('not-display');
}

function secondItemNotActive() {
  document.getElementById("red-block-3").classList.add('not-display');
  document.getElementById("red-long").classList.add('not-display');
}

