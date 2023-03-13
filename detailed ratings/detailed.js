function goToUrl() {
    if (location.href === 'https://stormcodi.github.io/CritiKicks/' || location.href === 'http://127.0.0.1:5500/index.html') {
      location.reload();
    } else if (location.href === 'http://127.0.0.1:5500/detailed%20ratings/detailed.html') {
      location.href = 'http://127.0.0.1:5500/index.html';
    } else {
      location.href = 'https://stormcodi.github.io/CritiKicks/';
    }
  }