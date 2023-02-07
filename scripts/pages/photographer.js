async function getPhotographers() {
  // Penser à remplacer par les données récupérées dans le json
  let url = './data/photographers.json'
  try {
    let res = await fetch(url)
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

async function displayData(photographers, media) {
  //Récupération de l'id dans l'url
  const queryString_url_id = window.location.search
  //Extraction de l'id
  const urlsearchParams = new URLSearchParams(queryString_url_id)
  const _id = urlsearchParams.get('id')

  const filteredPhotographers = photographers.filter((obj) => obj.id == _id)
  const photographersSection = document.querySelector('.photograph-header')


  filteredPhotographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userPicture = photographerModel.getUserPicture();
    photographersSection.appendChild(userPicture);
    const userInfo = photographerModel.getUserInfo();
    const infoPrice = document.querySelector('.infos__price');
    photographersSection.appendChild(userInfo);
    const userPriceDOM = photographerModel.getUserPriceDom();
    infoPrice.appendChild(userPriceDOM);
  })

  const filteredMedias = media.filter((obj) => obj.photographerId == _id)
  console.log(filteredMedias)
  const mediaSection = document.getElementsByClassName('gallery');
  console.log(mediaSection)
  filteredMedias.forEach((media) => {
    const mediaModel = mediaFactory(media);
    const mediaCard = mediaModel.getMediaCardDOM();
    mediaSection[0].appendChild(mediaCard);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers, media } = await getPhotographers()
  displayData(photographers, media)
}

init()
