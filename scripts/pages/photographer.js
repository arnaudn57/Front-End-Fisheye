// // Récuperation de l'id du photographe dans l'url
// const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);
// const photographerId = urlParams.get('id');
// console.log(photographerId);
// let photographers = [];
// let media;


  // fetch('../data/photographers.json')
  // .then((response) => response.json())
  // .then((data) => {
  //   photographers = data.photographers;
  //   console.log(photographers);
  //   photographers.forEach((photographer) => {
  //     if (photographer.id == photographerId) {
  //       console.log(photographer);
  //     };
  //   });
  //   medias = data.media;
  //   medias.forEach((media) => {
  //     if (media.photographerId == photographerId) {
  //       console.log(media);
  //       if('video' in media){
  //         console.log('video');
  //       }
  //     };
  //   })
  // });

//==== Récupération des photographes ====
async function getPhotographers() {
  await fetch('../data/photographers.json')
    .then((response) => response.json())
    .then((data) => {
      photographers = data.photographers;
      console.log(photographers);
    });
  return { photographers: [...photographers] };
}


//==== Récupération des médias ====
async function getMedia() {
  await fetch('../data/photographers.json')
    .then((response) => response.json())
    .then((data) => {
      medias = data.media;
      console.log(medias);
    });
  return { media: [...medias] };
}

//Affichage des données du photographe
async function displayDataPhotographer(photographers) {
	// photographers.forEach(photographer => {
	// 	if(photographerId === photographer.id) {
  //     console.log(photographer.id)
	// 		photographerHeaderProfile(photographer);
	// 	}
	// });
  photographers.forEach(photographer => {
    if(photographerId == photographer.id) {
      console.log(photographer)
      photographerHeaderProfile(photographer);
    }
  });
}

async function displayMediasPhotographer(media) {
  media.forEach(media => {
    if(photographerId == media.photographerId) {
      console.log(media)
      photographerMediasProfile(media);
    }
  });
}

async function init() {
  const { photographers } = await getPhotographers();
	const { media } = await getMedia();
  displayDataPhotographer(photographers);
  displayMediasPhotographer(media);

}
init();
