function goToUrl() {
    if (location.href === 'https://stormcodi.github.io/CritiKicks/' || location.href === 'http://127.0.0.1:5500/index.html') {
      location.reload();
    } else {
      location.href = 'https://stormcodi.github.io/CritiKicks/';
    }
  }