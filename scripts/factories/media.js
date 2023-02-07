function mediaFactory(data) {
  const { image, video, title, likes, id, date } = data;

  const picture = `./assets/images/${image}`;
  const _video = `./assets/images/${video}`;
  const titre = `./assets/images/${title}`;
  const coeur = `./assets/images/${likes}`;

  function getMediaCardDOM() {
    console.log("Tout les médias");
  }
  return { titre, coeur, _video, picture, date, getMediaCardDOM }
}
