let currentMedias = 0;
function openLightbox(index){
  const lightbox = document.getElementsByClassName('lightbox');
  lightbox[0].style.display = 'flex';

  //Masque le main et le header
  const main = document.getElementById('main');
  main.style.display = 'none';
  const header =  document.getElementsByTagName('header')[0];
  header.style.display = 'none';

  //Récupère tous les médias dans l'ordre du DOM
  const allMedias = Array.from(document.getElementsByClassName('media'));
  console.log(allMedias[index]);
  //Retour au premier media si le dernier est atteint
  if (index > allMedias.length - 1){
    index = 0;
  } else if (index < 0){
    //Retour au dernier media si le premier est atteint
    index = allMedias.length - 1;
  }

  const lightboxBox = document.getElementsByClassName('main-media')[0];
  lightboxBox.innerHTML = '';

  //Récupère le type de média pour adpater l'affichage du media si IMG ou VIDEO
  const typeMedia = allMedias[index].tagName;
  if (typeMedia == 'IMG'){

    //Si le media est une image, construction de main-content IMAGE de la lightbox
    const lightboxImage = document.createElement('img');
    lightboxImage.setAttribute('src', allMedias[index].getAttribute('src'));
    lightboxImage.setAttribute('tabindex', '2');
    lightboxImage.setAttribute('aria-label', allMedias[index].getAttribute('alt').match(/'([^']+)'/)[1]);

    const titleCurrentMedia = document.createElement('p');
    titleCurrentMedia.setAttribute('class', 'title-current-media');
    titleCurrentMedia.setAttribute('tabindex', '3');
    titleCurrentMedia.textContent = allMedias[index].getAttribute('alt');

    lightboxBox.appendChild(lightboxImage);
    lightboxBox.appendChild(titleCurrentMedia);

    currentMedias = index;

  } else {

    //Si le media est une vidéo, construction de main-content VIDEO de la lightbox
    const lightboxVideo = document.createElement('video');
    lightboxVideo.setAttribute('controls', 'controls');
    lightboxVideo.setAttribute('autoplay', 'autoplay');
    lightboxVideo.setAttribute('loop', 'loop');
    lightboxVideo.setAttribute('tabindex', '2');

    const lightboxSource = document.createElement('source');
    lightboxSource.setAttribute('src', allMedias[index].children[0].getAttribute('src'));

    //Titre de la vidéo
    const titleCurrentMedia = document.createElement('p');
    titleCurrentMedia.setAttribute('class', 'title-current-media');
    titleCurrentMedia.setAttribute('tabindex', '3');
    titleCurrentMedia.textContent = allMedias[index].children[0].getAttribute('alt');
    console.log(allMedias[index].children[0].getAttribute('alt'));
    lightboxVideo.appendChild(lightboxSource);
    lightboxBox.appendChild(lightboxVideo);
    lightboxBox.appendChild(titleCurrentMedia);

    currentMedias = index;
  }

}

//Switch pour le controle des médias dans la lightbox
document.addEventListener('keydown', function (e) {
  if (e.defaultPrevented) {
    previousMedia();
  }

  switch (e.key){
    //Si flèche gauche retour au média précédent
    case 'ArrowLeft':
      previousMedia();
      break;
    //Si flèche droite retour au média suivant
    case 'ArrowRight':
      nextMedia();
      break;
    //Si touche échap fermeture de la lightbox
    case 'Escape':
      closeLightbox();
      break;
    default:
      return;
  }
});


//Function pour aller au media suivant dans la lightbox
function nextMedia(){
  openLightbox(currentMedias + 1);
}

//Function pour aller au media précédent dans la lightbox
function previousMedia(){
  openLightbox(currentMedias - 1);
}

//Function fermeture lightbox
function closeLightbox(){
  const lightbox = document.getElementsByClassName('lightbox')[0];
  lightbox.style.display = 'none';

  const main = document.getElementById('main');
  main.style.display = 'block';

  const header = document.getElementsByTagName('header')[0];
  header.style.display = 'block';
}
