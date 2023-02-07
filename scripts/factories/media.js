function mediaFactory(data) {
  const { image, video, title, likes, id, date } = data;

  const picture = `./assets/images/${image}`;
  const _video = `./assets/images/${video}`;
  const titre = title;
  const coeur = `./assets/images/${likes}`;

  function getMediaCardDOM() {
    console.log(data);
    //Création de la div
    const div = document.createElement('div');
    div.setAttribute('class', 'photo');
    let counterHitLike = false;
    let numberLikes = likes;



    if ('video' in data) {
      console.log('video');
      //Création de la balise video
      const video = document.createElement('video');
      video.setAttribute('controls', 'controls');
      video.setAttribute('class', 'media');

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

      coeurVideo.addEventListener('click', function () {
        counterHitLike++;
        if (counterHitLike == false) {
        numberLikes--;
        likesVideo.textContent = numberLikes;
        } else if (counterHitLike == true) {
          numberLikes++;
          likesVideo.textContent = numberLikes;
        }
      });

      //Ajout de la balise video dans la div
      div.appendChild(video);
      div.appendChild(infoVideo);
      infoVideo.appendChild(titreVideo);
      infoVideo.appendChild(likeBlock);
      likeBlock.appendChild(likesVideo);
      likeBlock.appendChild(coeurVideo);

    } else {

      console.log('image');
      //Création de la balise img

      const img = document.createElement('img');
      // img.setAttribute('class', 'photo');
      img.setAttribute('src', picture);
      img.setAttribute('alt', titre);
      img.setAttribute('class', 'media');

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

      coeurImage.addEventListener('click', function () {
        counterHitLike++;
        if (counterHitLike == false) {
        numberLikes--;
        likesImage.textContent = numberLikes;
        } else if (counterHitLike == true) {
          numberLikes++;
          likesImage.textContent = numberLikes;
        }
      });

      div.appendChild(img);
      div.appendChild(infoImage);
      infoImage.appendChild(titreImage);
      infoImage.appendChild(likeBlock);
      likeBlock.appendChild(likesImage);
      likeBlock.appendChild(coeurImage);

    }
    return div;
  }
  return { titre, coeur, _video, picture, date, getMediaCardDOM }
}
