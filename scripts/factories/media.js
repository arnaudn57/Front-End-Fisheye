import {decrementAllLikes, incrementAllLikes} from '../factories/profil.js';

function mediaFactory(data) {
  const { image, video, title, likes, date } = data;
  console.log(data)
  const picture = `./assets/images/${image}`;
  const _video = `./assets/images/${video}`;
  const titre = title;
  const coeur = `./assets/images/${likes}`;

  function getMediaCardDOM(mediaIndex) {
    const lien = document.createElement('a');

    //Création de la div
    const article = document.createElement('article');
    article.setAttribute('class', 'photo');
    let counterHitLikeVideo = false;
    let counterHitLikeImage = false;
    let numberLikes = likes;

    if ('video' in data) {
      //Si le media est une vidéo

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

      if (counterHitLikeVideo == false) {
          numberLikes++;
          likesVideo.textContent = numberLikes;
          counterHitLikeVideo = true;
          incrementAllLikes();
        } else if (counterHitLikeVideo == true) {
          numberLikes--;
          likesVideo.textContent = numberLikes;
          counterHitLikeVideo = false;
          decrementAllLikes();
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
      //Si le media est une image

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
        if (counterHitLikeImage == false) {
          numberLikes++;
          likesImage.textContent = numberLikes;
          counterHitLikeImage = true;
          incrementAllLikes();
        } else if (counterHitLikeImage == true) {
          numberLikes--;
          likesImage.textContent = numberLikes;
          counterHitLikeImage = false;
          decrementAllLikes();
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

//Function affichage des medias dans la gallery
function displayMediasGallery(filteredMedias){
  const mediaSection = document.getElementsByClassName('gallery');
  filteredMedias.forEach((media) => {
    const mediaModel = mediaFactory(media);
    const mediaCard = mediaModel.getMediaCardDOM(filteredMedias.indexOf(media));
    mediaSection[0].appendChild(mediaCard);
  });
}

export { displayMediasGallery }
