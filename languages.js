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
if (window.location.hash) {
  if (window.location.hash === "#es"){
    hi.textContent = languages.es.welcome;
  } else if (window.location.hash === "#pt"){
    hi.textContent = languages.pt.welcome;
  } else {
    hi.textContent = languages.eng.welcome;
  }
}

// define language reload onclick illiteration

for (i = 0; i <= dataReload.length; i++){
  dataReload[i].onclick = function() {
    window.location.reload(true);
  };
}