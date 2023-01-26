// define language reload anchors
let dataReload = document.querySelectorAll("[data-reload]");
let hi = document.getElementById('hi');
// set language translations
let languages = {
  eng: {
    welcome: "Hello there"
  },
  es: {
    welcome: "Bem venidos"
  },
  pt: {
    welcome: "Bem vindo"
  }
}

// define language via window hash
function setLanguage(){
  if (window.location.hash) {
    if (window.location.hash === "#es"){
      hi.textContent = languages.es.welcome;
    } else if (window.location.hash === "#pt"){
      hi.textContent = languages.pt.welcome;
    } else {
      hi.textContent = languages.eng.welcome;
    }
  }
}
window.addEventListener('hashchange', () => {
  setLanguage();
}, false);
setLanguage();
