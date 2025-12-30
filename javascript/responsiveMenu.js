function responsiveMenu() {
    var x = document.getElementById("nav-bar");
    var videoBackground = document.querySelector(".background-video");
    var infoSocials = document.querySelector(".info-socials");
    var cartoesInfo = document.querySelector(".cartoes-info");
    var youtubeHighlights = document.querySelector(".youtube-highlights");
    var twitchStreamLive = document.querySelector(".twitch-stream-live");
    var tiktok = document.querySelector(".tiktok-ESL-highlights");

    if (x.className === "nav-bar") {
      x.className += " responsive";
    } else {
      x.className = "nav-bar";
    }

    if (videoBackground.className === "background-video") {
        videoBackground.className += " dark";
    } else {
        videoBackground.className = "background-video";
    }

    if (infoSocials.className === "info-socials") {
        infoSocials.className += " dark";
    } else {
        infoSocials.className = "info-socials";
    }

    if (cartoesInfo.className === "cartoes-info") {
        cartoesInfo.className += " dark";
    } else {
        cartoesInfo.className = "cartoes-info";
    }

    if (twitchStreamLive.className === "twitch-stream-live") {
        twitchStreamLive.className += " dark";
    } else {
        twitchStreamLive.className = "twitch-stream-live";
    }

    if (tiktok.className === "tiktok-ESL-highlights") {
        tiktok.className += " dark";
    } else {
        tiktok.className = "tiktok-ESL-highlights";
    }

}

function responsiveMenu2(){
    var x = document.getElementById("nav-bar");
    var introducao = document.querySelector(".introducao");
    var textoUm = document.querySelector(".texto-about-me-um");
    var meioTextoUm = document.querySelector(".middle-text-um");
    var meioTextoDois = document.querySelector(".middle-text");
    var introducao2 = document.querySelector(".introducao2");
    var textoDois = document.querySelector(".texto-about-me-dois");
    var finalTexto = document.querySelector(".final-text");

    if (x.className === "nav-bar") {
        x.className += " responsive";
      } else {
        x.className = "nav-bar";
      }

    if (finalTexto.className === "final-text") {
        finalTexto.className += " dark";
    } else {
        finalTexto.className = "final-text";
    }

    if (textoDois.className === "texto-about-me-dois") {
        textoDois.className += " dark";
    } else {
        textoDois.className = "texto-about-me-dois";
    }

    if (introducao2.className === "introducao2") {
        introducao2.className += " dark";
    } else {
        introducao2.className = "introducao2";
    }

    if (meioTextoDois.className === "middle-text") {
        meioTextoDois.className += " dark";
    } else {
        meioTextoDois.className = "middle-text";
    }

    if (meioTextoUm.className === "middle-text-um") {
        meioTextoUm.className += " dark";
    } else {
        meioTextoUm.className = "middle-text-um";
    }
    
    if (textoUm.className === "texto-about-me-um") {
        textoUm.className += " dark";
    } else {
        textoUm.className = "texto-about-me-um";
    }

    if (introducao.className === "introducao") {
        introducao.className += " dark";
    } else {
        introducao.className = "introducao";
    }
}

function responsiveMenu3(){
    var x = document.getElementById("nav-bar");
    var disclaimer = document.querySelector(".disclaimer");
    var imagemloja = document.querySelector(".imagem-loja");
    var loja = document.querySelector(".loja");


    if (x.className === "nav-bar") {
        x.className += " responsive";
      } else {
        x.className = "nav-bar";
      }

    if (disclaimer.className === "disclaimer") {
        disclaimer.className += " dark";
    } else {
        disclaimer.className = "disclaimer";
    }
    
    if (imagemloja.className === "imagem-loja") {
        imagemloja.className += " dark";
    } else {
        imagemloja.className = "imagem-loja";
    }

    if (loja.className === "loja") {
        loja.className += " dark";
    } else {
        loja.className = "loja";
    }
}

function responsiveMenu4(){
    var x = document.getElementById("nav-bar");
    var yt = document.querySelector(".youtube-highlights");


    if (x.className === "nav-bar") {
        x.className += " responsive";
      } else {
        x.className = "nav-bar";
      }

    if (yt.className === "youtube-highlights") {
        yt.className += " dark";
    } else {
        yt.className = "youtube-highlights";
    }
}

function responsiveMenu5(){
    var x = document.getElementById("nav-bar");
    var contacts = document.querySelector(".estrutura-inicial");


    if (x.className === "nav-bar") {
        x.className += " responsive";
      } else {
        x.className = "nav-bar";
      }

    if (contacts.className === "estrutura-inicial") {
        contacts.className += " dark";
    } else {
        contacts.className = "estrutura-inicial";
    }
}

function toggleSocials() {
    var arrow = document.getElementById('socials-toggle');
    var links = document.getElementById('social-links');
    if (links.style.display === 'none' || links.style.display === '') {
        links.style.display = 'flex';
        arrow.innerHTML = '&lt;';
    } else {
        links.style.display = 'none';
        arrow.innerHTML = '&gt;';
    }
}