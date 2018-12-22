function makeGrayFirst(){
  document.getElementById("day").style.color="#7d7c7c";
  document.getElementById("month").style.color="#7d7c7c";
  document.getElementById("number-of-day").style.borderColor="#7d7c7c";
  document.getElementById('red-block-3').style.display="none";
  document.getElementById('red-long-1').style.display="none";
  document.getElementById('first-img').setAttribute('src', 'img/icon.png');
}

function makeGrayThird(){
  document.getElementById("day-3").style.color="#7d7c7c";
  document.getElementById("month-3").style.color="#7d7c7c";
  document.getElementById("number-3").style.borderColor="#7d7c7c";
}

function makeGrayFourth(){
  document.getElementById("day-4").style.color="#7d7c7c";
  document.getElementById("month-4").style.color="#7d7c7c";
  document.getElementById("number-4").style.borderColor="#7d7c7c";
  document.getElementById('red-long-4').style.display="none";
  document.getElementById('fourth-img').setAttribute('src', 'img/icon.png');
}

function makeGrayFifth(){
  document.getElementById("day-5").style.color="#7d7c7c";
  document.getElementById("month-5").style.color="#7d7c7c";
  document.getElementById("number-5").style.borderColor="#7d7c7c";
  document.getElementById('red-long').style.display="none";
  document.getElementById('red-long-5').style.display="none";
  document.getElementById('red-block-3').style.display="none";
  document.getElementById('fifth-img').setAttribute('src', 'img/icon.png');
}

document.getElementById('first-item').onclick = function(){
  document.getElementById('first-img').setAttribute('src', 'img/icon-red.png');
  document.getElementById('back').setAttribute('src', 'img/back1.jpg');
  document.getElementById("day").style.color="white";
  document.getElementById("month").style.color="white";
  document.getElementById("number-of-day").style.borderColor="white";
  document.getElementById('red-long-1').style.display="block";

  makeGrayThird();
  makeGrayFourth();
  makeGrayFifth();
};

document.getElementById('fourth-item').onclick = function(){
  document.getElementById('fourth-img').setAttribute('src', 'img/icon-red.png');
  document.getElementById('back').setAttribute('src', 'img/back2.jpg');
  document.getElementById("day-4").style.color="white";
  document.getElementById("month-4").style.color="white";
  document.getElementById("number-4").style.borderColor="white";
  document.getElementById('red-long-4').style.display="block";

  makeGrayFirst();
  makeGrayThird();
  makeGrayFifth();
};

document.getElementById('fifth-item').onclick = function(){
  document.getElementById('fifth-img').setAttribute('src', 'img/icon-red.png');
  document.getElementById('red-long-5').style.display="block";
  document.getElementById('back').setAttribute('src', 'img/back3.jpg');
  document.getElementById("day-5").style.color="white";
  document.getElementById("month-5").style.color="white";
  document.getElementById("number-5").style.borderColor="white";
  document.getElementById('red-long').style.display="none";

  makeGrayFirst();
  makeGrayThird();
  makeGrayFourth();
};

/*'use strict';

let slider = multiItemSlider('.slider')

//let left = document.getElementById("left-arrow");

//document.getElementById("left-arrow").onclick = function () {
//
//  document.getElementById("first-block").replaceWith(document.getElementById("second-block"));
  //first.parentNode.removeChild(first);
  //document.getElementById('first-img').setAttribute('src', 'img/icon.png');



  //first.replaceChild(second,first.firstChild);
  //(second).replaceWith(third);
  //(third).replaceWith(fourth);
  //(fourth).replaceWith(fifth);
//};

//function callback() {
//  (first).replaceWith(second);
//  (second).replaceWith(third);
//  (third).replaceWith(fourth);
//  (fourth).replaceWith(fifth);
//
//
//
//}
//
//left.addEventListener('click', callback);
*/
