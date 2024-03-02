
    // Clicking the current language toggles the 'is-open' class 
// on the 'lang' block:
document.getElementById('lang-toggle').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById("lang").classList.toggle('is-open');
}

);
