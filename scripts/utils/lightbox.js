let currentMedias = 0;
function openLightbox(index){

  const lightbox = document.getElementsByClassName('lightbox');
  lightbox[0].style.display = 'flex';

  const main = document.getElementById('main');
  main.style.display = 'none';

  const header =  document.getElementsByTagName('header')[0];
  header.style.display = 'none';

  console.log('ok' + index);
  const allMedias = Array.from(document.getElementsByClassName('media'));
  console.log(allMedias)
  const lightboxBox = document.getElementsByClassName('main-media')[0];
  lightboxBox.innerHTML = '';
  const typeMedia = allMedias[index].tagName;

  if (typeMedia == 'IMG'){
    const lightboxImage = document.createElement('img');
    lightboxImage.setAttribute('src', allMedias[index].getAttribute('src'));

    const titleCurrentMedia = document.createElement('p');
    titleCurrentMedia.setAttribute('class', 'title-current-media');
    titleCurrentMedia.textContent = allMedias[index].getAttribute('alt');

    lightboxBox.appendChild(lightboxImage);
    lightboxBox.appendChild(titleCurrentMedia);
    currentMedias = index;
  } else {
    const lightboxVideo = document.createElement('video');
    lightboxVideo.setAttribute('controls', 'controls');

    const lightboxSource = document.createElement('source');
    lightboxSource.setAttribute('src', allMedias[index].children[0].getAttribute('src'));
    lightboxVideo.appendChild(lightboxSource);
    currentMedias = index;
    lightboxBox.appendChild(lightboxVideo);
  }

}


//Faire Swicth case (arrow-left)
document.addEventListener('keydown', function (e) {
  if (e.keyCode == 37) {
    previousMedia();
  } else if (e.keyCode == 39) {
    nextMedia();
  } else if (e.keyCode == 27) {
    closeLightbox();
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
