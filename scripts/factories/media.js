function mediaFactory(data) {
  const { image, video, title, likes, id, date } = data;
  console.log(data)
  const picture = `./assets/images/${image}`;
  const _video = `./assets/images/${video}`;
  const titre = title;
  const coeur = `./assets/images/${likes}`;

  function getMediaCardDOM(mediaIndex) {
    // console.log(data);
    const lien = document.createElement('a');
      // lien.setAttribute('href', `/&photo=${id}`);
    console.log(mediaIndex);
    //Création de la div
    const article = document.createElement('article');
    article.setAttribute('class', 'photo');
    let counterHitLikeVideo = false;
    let counterHitLikeImage = false;
    let numberLikes = likes;
    // let counterLightbox = 0;


    if ('video' in data) {
      // console.log('video');

      //Création de la balise video
      const video = document.createElement('video');
      // video.setAttribute('controls', 'controls');
      video.setAttribute('class', 'media');
      video.setAttribute('onclick', "openLightbox("+ mediaIndex +")");

      //Création de la balise source
      const source = document.createElement('source');
      source.setAttribute('src', _video);
      source.setAttribute('alt', titre);

      const infoVideo = document.createElement('span');
      infoVideo.setAttribute('class', 'info');

      const titreVideo = document.createElement('p');
      titreVideo.setAttribute('class', 'titre');
      titreVideo.textContent = titre;
      //Ajout de la balise source dans la balise video
      video.appendChild(source);

      //partie Like
      const likeBlock = document.createElement('like');
      likeBlock.setAttribute('class', 'like');

      const likesVideo = document.createElement('p');
      likesVideo.setAttribute('class', 'like_number');
      likesVideo.textContent = likes;

      const coeurVideo = document.createElement('span');
      coeurVideo.setAttribute('id', 'coeur');
      coeurVideo.setAttribute('class', 'fa-solid fa-heart');
      coeurVideo.setAttribute('aria-label', 'likes')
      coeurVideo.addEventListener('click', function () {
        // counterHitLike++;
      if (counterHitLikeVideo == false) {
          numberLikes++;
          likesVideo.textContent = numberLikes;
          counterHitLikeVideo = true;
          allLikePhotographe();
        } else if (counterHitLikeVideo == true) {
          numberLikes--;
          likesVideo.textContent = numberLikes;
          counterHitLikeVideo = false;
          allLikePhotographe();
        }
      });

      //Ajout de la balise video dans l'article
      article.appendChild(lien);
      lien.appendChild(video);
      lien.appendChild(infoVideo);
      infoVideo.appendChild(titreVideo);
      infoVideo.appendChild(likeBlock);
      likeBlock.appendChild(likesVideo);
      likeBlock.appendChild(coeurVideo);
    } else {

      // console.log('image');
      //Création de la balise img

      const img = document.createElement('img');
      // img.setAttribute('class', 'photo');
      img.setAttribute('src', picture);
      img.setAttribute('alt', titre);
      img.setAttribute('class', 'media');
      img.setAttribute('onclick', "openLightbox(" + mediaIndex +")");

      const infoImage = document.createElement('span');
      infoImage.setAttribute('class', 'info');

      const titreImage = document.createElement('p');
      titreImage.setAttribute('class', 'titre');
      titreImage.textContent = titre;

      //partie Like
      const likeBlock = document.createElement('like');
      likeBlock.setAttribute('class', 'like');

      const likesImage = document.createElement('p');
      likesImage.setAttribute('class', 'like_number');
      likesImage.textContent = numberLikes;

      const coeurImage = document.createElement('span');
      coeurImage.setAttribute('id', 'coeur');
      coeurImage.setAttribute('class', 'fa-solid fa-heart');
      coeurImage.setAttribute('aria-label', 'likes')

      coeurImage.addEventListener('click', function () {
        // counterHitLike++;
        if (counterHitLikeImage == false) {
          numberLikes++;
          likesImage.textContent = numberLikes;
          counterHitLikeImage = true;
          allLikePhotographe();
        } else if (counterHitLikeImage == true) {
          numberLikes--;
          likesImage.textContent = numberLikes;
          counterHitLikeImage = false;
          allLikePhotographe();
        }
      });

      // console.log(counterLightbox);
      //Ajout de la balise img dans l'article
      article.appendChild(lien);
      lien.appendChild(img);
      lien.appendChild(infoImage);
      infoImage.appendChild(titreImage);
      infoImage.appendChild(likeBlock);
      likeBlock.appendChild(likesImage);
      likeBlock.appendChild(coeurImage);
    }
    return article;
  }

  return { titre, coeur, _video, picture, date, getMediaCardDOM }
}

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

function nextMedia(){
  openLightbox(currentMedias + 1);
}

function previousMedia(){
  openLightbox(currentMedias - 1);
}

function closeLightbox(){
  const lightbox = document.getElementsByClassName('lightbox')[0];
  lightbox.style.display = 'none';

  const main = document.getElementById('main');
  main.style.display = 'block';

  const header = document.getElementByTagName('header')[0];
  header.style.display = 'block';
}
