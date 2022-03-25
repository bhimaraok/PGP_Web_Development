let currentSlide = 1;

function next() {
  document.getElementById("slider").style.transition = ".7s";
  currentSlide++;
  openSlide(currentSlide);

  if (currentSlide > 4) {
    setTimeout(function () {
      document.getElementById("slider").style.transition = ".0s";
      currentSlide = 1;
      openSlide(currentSlide);
    }, 700);
  }
  resetInterval();
}

let move = setInterval(function () {
  next();
}, 3000);

function resetInterval() {
  clearInterval(move);
  move = setInterval(function () {
    next();
  }, 3000);
}

function prev() {
  document.getElementById("slider").style.transition = ".7s";
  currentSlide--;
  openSlide(currentSlide);

  if (currentSlide < 1) {
    setTimeout(function () {
      document.getElementById("slider").style.transition = ".0s";
      currentSlide = 4;
      openSlide(currentSlide);
    }, 700);
  }
  resetInterval();
}

function openSlide(slideNo) {
  let marginLeft = slideNo * 100;
  document.getElementById("slider").style.marginLeft = -marginLeft + "%";

  let indicators = document.getElementsByClassName("indicator");

  document.getElementById("next").classList.add("disabled");
  document.getElementById("prev").classList.add("disabled");

  for (let i = 0; i < indicators.length; i++) {
    indicators[i].classList.add("disabled");
  }

  setTimeout(function () {
    document.getElementById("next").classList.remove("disabled");
    document.getElementById("prev").classList.remove("disabled");
    for (let i = 0; i < indicators.length; i++) {
      indicators[i].classList.remove("disabled");
    }
  }, 700);

  for (let i = 0; i < indicators.length; i++) {
    if (i + 1 === slideNo) {
      indicators[i].classList.add("activeIndicator");
    } else {
      indicators[i].classList.remove("activeIndicator");
    }
  }
}

function indicate(slideNo) {
  if (slideNo >= 1 && slideNo <= 4) {
    currentSlide = slideNo;
    document.getElementById("slider").style.transition = ".7s";
    openSlide(slideNo);
    resetInterval();
  }
}
