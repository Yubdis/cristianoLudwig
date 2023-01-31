// define language reload anchors
let dataReload = document.querySelectorAll("[data-reload]");
let intro = document.getElementById('home-intro');
let linkHome = document.getElementById('link-home');
let linkBio = document.getElementById('link-bio');
let linkMusic = document.getElementById('link-music');
let linkVideo = document.getElementById('link-video');
let linkContact = document.getElementById('link-contact');
let bioTitle = document.getElementById('bio-title');
let bioText = document.getElementById('bio-text');
let musicTitle = document.getElementById('music-title');
let musicText = document.getElementById('music-text');
let musicSubhead = document.getElementById('music-subhead');
let videoTitle = document.getElementById('video-title');
let formTitle = document.getElementById('form-title');
let formPerson = document.getElementById('form-person');
let formEmail = document.getElementById('form-email');
let formPhone = document.getElementById('form-phone');
let formMessage = document.getElementById('form-message');
let formButton = document.getElementById('form-button');
// set language translations
let languages = {
  eng: {
    welcome: "Musician, Composer, Teacher",
    navhome: "Home",
    navbio: "Bio",
    navmusic: "Music",
    navvideo: "Video",
    navcontact: "Contact",
    biotitle: "About the Artist",
    biotext: "Paragraph about Cristiano",
    musictitle: "Music",
    musictext: "Paragraph about Cris' Music",
    musicsubhead: "You can listen to my music here",
    videotitle: "You can watch my Youtube channel here",
    formtitle: "Contact Form",
    formperson: "Name",
    formemail: "Email",
    formphone: "Phone",
    formmessage: "Message",
    formbutton: "Send"
  },
  es: {
    welcome: "Músico, Compositor, Profesor",
    navhome: "Casa",
    navbio: "Biografía",
    navmusic: "Música",
    navvideo: "Video",
    navcontact: "Contacto",
    biotitle: "Sobre el Artista",
    biotext: "Cosas de Cris",
    musictitle: "Escucha música aquí",
    musicsubhead: "Escucha spotify aquí",
    videotitle: "Ver Video Aqui",
    formtitle: "Contacto",
    formperson: "Nombre",
    formemail: "Email",
    formphone: "Teléfono",
    formmessage: "Mensaje",
    formbutton: "Enviar"
  },
  pt: {
    welcome: "Músico, Compositor, Professor",
    navhome: "Casa",
    navbio: "Biografia",
    navmusic: "Música",
    navvideo: "Vídeo",
    navcontact: "Contato",
    biotitle: "Sobre o Artista",
    biotext: "Esse e coisa's sobre Cris",
    musictitle: "Música",
    musictext: "Pode ouvir Musica aqui",
    musicsubhead: "Pode ouvir no spotify aqui",
    videotitle: "Assitir video's no Youtube",
    formtitle: "Contato",
    formperson: "Nome",
    formemail: "Email",
    formphone: "Celular",
    formmessage: "Mensagem",
    formbutton: "Enviar"
  }
}

// define language via window hash
function setLanguage(){
  if (window.location.hash) {
    if (window.location.hash === "#es"){
      intro.textContent = languages.es.welcome;
      linkHome.textContent = languages.es.navhome;
      linkBio.textContent = languages.es.navbio;
      linkMusic.textContent = languages.es.navmusic;
      linkVideo.textContent = languages.es.navvideo;
      linkContact.textContent = languages.es.navcontact;
      bioTitle.textContent = languages.es.biotitle;
      bioText.textContent = languages.es.biotext;
      musicTitle.textContent = languages.es.musictitle;
      musicText.textContent = languages.es.musictext;
      musicSubhead.textContent = languages.es.musicsubhead;
      videoTitle.textContent = languages.es.videotitle;
      formTitle.textContent = languages.es.formtitle;
      formPerson.textContent = languages.es.formperson;
      formEmail.textContent = languages.es.formemail;
      formPhone.textContent = languages.es.formphone;
      formMessage.textContent = languages.es.formmessage;
      formButton.textContent = languages.es.formbutton;
    } else if (window.location.hash === "#pt"){
      intro.textContent = languages.pt.welcome;
      linkHome.textContent = languages.pt.navhome;
      linkBio.textContent = languages.pt.navbio;
      linkMusic.textContent = languages.pt.navmusic;
      linkVideo.textContent = languages.pt.navvideo;
      linkContact.textContent = languages.pt.navcontact;
      bioTitle.textContent = languages.pt.biotitle;
      bioText.textContent = languages.pt.biotext;
      musicTitle.textContent = languages.pt.musictitle;
      musicText.textContent = languages.pt.musictext;
      musicSubhead.textContent = languages.pt.musicsubhead;
      videoTitle.textContent = languages.pt.videotitle;
      formTitle.textContent = languages.pt.formtitle;
      formPerson.textContent = languages.pt.formperson;
      formEmail.textContent = languages.pt.formemail;
      formPhone.textContent = languages.pt.formphone;
      formMessage.textContent = languages.pt.formmessage;
      formButton.textContent = languages.pt.formbutton;
    } else {
      intro.textContent = languages.eng.welcome;
      linkHome.textContent = languages.eng.navhome;
      linkBio.textContent = languages.eng.navbio;
      linkMusic.textContent = languages.eng.navmusic;
      linkVideo.textContent = languages.eng.navvideo;
      linkContact.textContent = languages.eng.navcontact;
      bioTitle.textContent = languages.eng.biotitle;
      bioText.textContent = languages.eng.biotext;
      musicTitle.textContent = languages.eng.musictitle;
      musicText.textContent = languages.eng.musictext;
      musicSubhead.textContent = languages.eng.musicsubhead;
      videoTitle.textContent = languages.eng.videotitle;
      formTitle.textContent = languages.eng.formtitle;
      formPerson.textContent = languages.eng.formperson;
      formEmail.textContent = languages.eng.formemail;
      formPhone.textContent = languages.eng.formphone;
      formMessage.textContent = languages.eng.formmessage;
      formButton.textContent = languages.eng.formbutton;
    }
  }
}
window.addEventListener('hashchange', () => {
  setLanguage();
}, false);
setLanguage();
