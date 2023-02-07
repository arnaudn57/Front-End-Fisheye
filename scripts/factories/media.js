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
    div.setAttribute('class', 'media');

    if ('video' in data) {
      console.log('video');
      //Création de la balise video
      const video = document.createElement('video');
      video.setAttribute('controls', 'controls');
      // video.setAttribute('class', 'video');

      //Création de la balise source
      const source = document.createElement('source');
      source.setAttribute('src', _video);
      source.setAttribute('alt', titre);

      const titreVideo = document.createElement('p');
      titreVideo.setAttribute('class', 'titre');
      titreVideo.textContent = titre;
      //Ajout de la balise source dans la balise video
      video.appendChild(source);
      div.appendChild(titreVideo);
      //Ajout de la balise video dans la div
      div.appendChild(video);

    } else {

      console.log('image');
      //Création de la balise img
      const img = document.createElement('img');
      // img.setAttribute('class', 'photo');
      img.setAttribute('src', picture);
      img.setAttribute('alt', titre);
      //Ajout de la balise img dans la div
      const titreVideo = document.createElement('p');
      titreVideo.setAttribute('class', 'titre');
      titreVideo.textContent = titre;
      div.appendChild(img);
      div.appendChild(titreVideo);
    }
    return div;
  }
  return { titre, coeur, _video, picture, date, getMediaCardDOM }
}
