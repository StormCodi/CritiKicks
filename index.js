function goToUrl() {
  if (location.href === 'https://stormcodi.github.io/CritiKicks/' || location.href === 'http://127.0.0.1:5500/index.html') {
    location.reload();
  } else if (location.href === 'http://127.0.0.1:5500/about/about.html') {
    location.href = 'http://127.0.0.1:5500/index.html';
  } else {
    location.href = 'https://stormcodi.github.io/CritiKicks/';
  }
}

function goToAbout() {
  window.location.href = "about/about.html";
}

function goToDR() {
  window.location.href = "detailed ratings/index.html";
}

function checkValue() {
  if (document.querySelector("#mobile_select").value == "about") {
    goToAbout()
  } else if (document.querySelector("#mobile_select").value == "details")
    goToDR()
}

function goToDR() {
  window.location.href = "detailed ratings/detailed.html";
}