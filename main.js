var slideIndex = 1;
var slidesRead = 1;
showSlides(slideIndex);
var check = 0;
var check2 = 0;
var hasIntro = false;

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
  document.getElementById("n").style.display = "none";
  document.getElementById("c").style.display = "block";
  check = 0;
  check2 = 0;
}

function hasIntroTrue() {
  hasIntro = true;
}

// Next/previous for not metacognitive
function plusSlides2(n) {
  slideIndex += n;
  slidesRead = Math.max(slidesRead, slideIndex);
  showSlides(slideIndex);
  document.getElementById(`dot${slideIndex}`).classList.add("activeDot");
  document.getElementById("c").style.display = "block";
  check = 0;
  check2 = 0;
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function toggle(id) {
  var text = document.getElementById(id).style.display;
  if (text == "block") {
    document.getElementById(id).style.display = "none";
  } else {
    document.getElementById(id).style.display = "block";
  }
}

function show(id) {
  document.getElementById(id).style.display = "block";
}
function showInline(id) {
  document.getElementById(id).style.display = "inline";
}
function showintro() {
  document.getElementById("intro").style.display = "block";
  document.getElementById("name").style.display = "none";
  document.getElementById("begin").style.display = "none";
}

function hide(id) {
  document.getElementById(id).style.display = "none";
}

function showNext() {
  document.getElementById("n").style.display = "block";
}
function showNext2() {
  document.getElementById("n2").style.display = "block";
}

function begin() {
  document.getElementById("intro").style.display = "block";
  document.getElementById("n").style.display = "block";
  hide("name");
}

function begin2() {
  var input = document.getElementById("name");
  if (input.value != "") {
    document.getElementById("intro").style.display = "block";
    document.getElementById("n2").style.display = "block";
    hide("name");
  }
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (!hasIntro) {
    if (slideIndex > 1) {
      document.getElementById("pageNum").innerHTML = String(n - 2);
    } else {
      document.getElementById("pageNum").innerHTML = "";
    }
  } else {
    if (slideIndex > 2) {
      document.getElementById("pageNum").innerHTML = String(n - 3);
    } else {
      document.getElementById("pageNum").innerHTML = "";
    }
  }
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
  if (slideIndex == slidesRead) {
    document.getElementById("n2").style.display = "none";
  } else {
    document.getElementById("n2").style.display = "block";
  }
  if (slideIndex >= 2) {
    document.getElementById("p").style.display = "block";
  } else {
    document.getElementById("p").style.display = "none";
  }
}

function clickSlide(n) {
  if (n <= slidesRead) {
    slideIndex = n;
    this.showSlides(n);
  }
}

function clickNgede() {
  var success = new Audio("/sounds/success.wav");
  var failure = new Audio("/sounds/failure.wav");
  if (document.getElementById("firstq1").style.width == "18vw") {
    success.play();
    stop("1.1A");
    play("1.1B");
    document.getElementById("firstq1").style.width = "17vw";
    document.getElementById("firstq2").style.display = "block";
    document.getElementById("firstq1").style.display = "none";
    document.getElementById("firstAvatar").onclick = function () {
      toggle("firstq2");
    };
  } else {
    failure.play();
  }
}

function clickNgede2() {
  var success = new Audio("/sounds/success.wav");
  var failure = new Audio("/sounds/failure.wav");
  if (document.getElementById("firstq1").style.width == "18vw") {
    success.play();
    stop("1.1A");
    document.getElementById("firstq1").style.width = "17vw";
    document.getElementById("firstq2").style.display = "block";
    document.getElementById("firstq1").style.display = "none";
    document.getElementById("firstAvatar").onclick = function () {
      toggle("firstq2");
    };
  } else {
    failure.play();
  }
}

function clickG() {
  var success = new Audio("/sounds/success.wav");
  var failure = new Audio("/sounds/failure.wav");
  if (document.getElementById("firstq1").style.width == "18vw") {
    failure.play();
  } else {
    success.play();
    showNext2();
    stop("1.1B");
    document.getElementById("firstq2").style.display = "none";
    document.getElementById("firstSuccess").style.display = "block";
    document.getElementById("firstAvatar").onclick = function () {
      toggle("firstSuccess");
    };
    document.getElementById("n").style.display = "block";
  }
}

function success() {
  var success = document.getElementById("success");
  success.play();
}

function failure() {
  var failure = document.getElementById("failure");
  failure.play();
}

function play(sound_path) {
  var sound = document.getElementById(sound_path);
  sound.play();
}

function stop(sound_path) {
  var sound = document.getElementById(sound_path);
  sound.pause();
  sound.currentTime = 0;
}

function checkWord() {
  var value = document.getElementById("input1").value;
  if (value != "") {
    showNext2();
    stop("1.5");
  }
}
function checkWord2() {
  var value = document.getElementById("input1").value;
  if (value != "") {
    showNext2();
  }
}

function checkWord3() {
  var value = document.getElementById("inputHive").value;
  var value2 = document.getElementById("inputLeapard").value;
  if (value == "hive" && value2 == "leapard") {
    success();
    showNext2();
  } else {
    failure();
  }
}

function count() {
  check += 1;
}

function checkCount(num, id) {
  if (check == num) {
    showNext2();
  }
}

function count2() {
  check2 += 1;
}
function checkCount2(num, id) {
  if (check2 == num) {
    showNext2();
  }
}

function highlight(id) {
  document.getElementById(id).style.backgroundColor = "yellow";
}
function unhighlight(id) {
  document.getElementById(id).style.backgroundColor = "transparent";
}
function highlightNgede() {
  highlight("ŋ");
  setTimeout(unhighlight, 1600, "ŋ");
  setTimeout(highlight, 1600, "ɡe");
  setTimeout(unhighlight, 3100, "ɡe");
  setTimeout(highlight, 3100, "de");
  setTimeout(unhighlight, 4500, "de");
  setTimeout(highlight, 4500, "ŋɡede");
  setTimeout(showInline, 5000, "Check1");
}
function highlightGingile() {
  highlight("ɡɪŋ");
  setTimeout(unhighlight, 1600, "ɡɪŋ");
  setTimeout(highlight, 1600, "ɡi");
  setTimeout(unhighlight, 3100, "ɡi");
  setTimeout(highlight, 3100, "le");
  setTimeout(unhighlight, 4500, "le");
  setTimeout(highlight, 4500, "ɡɪŋɡele");
  setTimeout(showInline, 5000, "Check2");
}

function waitShowNext(time) {
  setTimeout(showNext, time);
}
function waitShowNext2(time) {
  setTimeout(showNext2, time);
}
function waitShow(item, time) {
  setTimeout(show, time, item);
}

function waitShowInline(item, time) {
  setTimeout(showInline, time, item);
}
function pauseVid(video) {
  document.getElementById(video).pause;
}
function enableClick(id) {
  document.getElementById(id).style.pointerEvents = "auto";
}
function disableClick(id) {
  document.getElementById(id).style.pointerEvents = "none";
}

function waitEnable(id, time) {
  document.getElementById(id).style.pointerEvents = "none";
  setTimeout(enableClick, time, id);
}

function enableInput(id) {
  document.getElementById(id).disabled = false;
}

function waitInput(id, time) {
  document.getElementById(id).disabled = true;
  setTimeout(enableInput, time, id);
}
function showVideo() {
  show("smokeVid");
  waitShowNext(23000);
  hide("beginbox");
  hide("intro");
  hide("coverPic");
  hide("avatar");
  var myVid = document.getElementById("smokeVid");
  myVid.play();
}

function showStoryVideo() {
  show("storyVid");
  waitShowNext2(59000);
  hide("beginbox");
  hide("intro");
  hide("coverPic");
  hide("avatar");
}

function showAfVideo() {
  show("africaVid");
  waitShowNext(20000);
  hide("beginbox");
  hide("intro");
  hide("coverPic");
  hide("avatar");
  hide("name");
  var myVid = document.getElementById("africaVid");
  myVid.play();
}
