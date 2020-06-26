window.onload = function () {
  var slidess = document.querySelectorAll(".client-slider .client-slide");
  var pointes = document.querySelectorAll(".client-slider .client__point ");
  var slideInterval = setInterval(nextSlide,5000);
  //console.log(pointes);

  var currentSlidee = 1;
/*
  var p1= document.getElementById("pointSlide1");
  var p2= document.getElementById("pointSlide2");
  var p3= document.getElementById("pointSlide3");
  console.log(p1);
  console.log(p2);
  console.log(p3);
  p1.onclick = pointSlide1;

  function pointSlide1() {  
    console.log("click1");
    slidess[currentSlidee].className = "client-slider__slide client-slide";
    pointes[currentSlidee].className = "client__point";
    currentSlidee = 1;
    slidess[currentSlidee].className =
      "client-slider__slide client-slide client-slide--show";
    pointes[currentSlidee].className = "client__point client__point--show";
  };
  function pointSlide2() {
    slidess[currentSlidee].className = "client-slider__slide client-slide";
    pointes[currentSlidee].className = "client__point";
    currentSlidee = 2;
    slidess[currentSlidee].className =
      "client-slider__slide client-slide client-slide--show";
    pointes[currentSlidee].className = "client__point client__point--show";
  }
  function pointSlide3() {
    slidess[currentSlidee].className = "client-slider__slide client-slide";
    pointes[currentSlidee].className = "client__point";
    currentSlidee = 3;
    slidess[currentSlidee].className =
      "client-slider__slide client-slide client-slide--show";
    pointes[currentSlidee].className = "client__point client__point--show";
  }
  */
  function nextSlide() {
    console.log("time");

    slidess[currentSlidee].className = "client-slider__slide client-slide";
    pointes[currentSlidee].className = "client__point";

    currentSlidee = (currentSlidee + 1) % slidess.length;

    slidess[currentSlidee].className =
      "client-slider__slide client-slide client-slide--show";
    pointes[currentSlidee].className = "client__point client__point--show";
  }
};
//client__point--show
