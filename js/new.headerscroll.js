function resizeHeaderOnScroll() {
  const distanceY = window.pageYOffset || document.documentElement.scrollTop,
  shrinkOn = 100,
  headerEl = document.getElementById('headercolumn');
  
  if (distanceY > shrinkOn) {
    headerEl.classList.add("smaller");
  } else {
    headerEl.classList.remove("smaller");
  }
}

window.addEventListener('scroll', resizeHeaderOnScroll);
