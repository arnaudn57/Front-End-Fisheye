import { tri } from '../utils/tri.js'

async function getPhotographers() {
  let url = './data/photographers.json'
  try {
    let res = await fetch(url)
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

const queryString_url_id = window.location.search
//Extraction de l'id
const urlsearchParams = new URLSearchParams(queryString_url_id)
const _id = urlsearchParams.get('id')
async function displayData(photographers, media) {
  //Récupération de l'id dans l'url


  //Photgrapher Profile
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


  //Media
  //Récuperation des medias du photographe selectionné
  let filteredMedias = media.filter((obj) => obj.photographerId == _id)
  filteredMedias = filteredMedias.sort((a, b) => a.likes - b.likes).reverse();
  const triSelect = document.getElementById('tri-select');
  triSelect.addEventListener('change', manageSort);
  console.log(filteredMedias)

  //Affichage des medias par defaut (populaire)
  const mediaSection = document.getElementsByClassName('gallery');
  filteredMedias.forEach((media) => {
    const mediaModel = mediaFactory(media);
    const mediaCard = mediaModel.getMediaCardDOM(filteredMedias.indexOf(media));
    mediaSection[0].appendChild(mediaCard);
    // console.log(filteredMedias.indexOf(media))
  });

  function manageSort(event){
    const pl = document.querySelectorAll('.photo');
    //Toutes les photos sont supprimées
    pl.forEach((p) => p.remove())

    //Import function tri from utils/tri.js
    tri(event, filteredMedias);

    //Affichage des medias filtrés
    filteredMedias.forEach((media) => {
      const mediaModel = mediaFactory(media);
      const mediaCard = mediaModel.getMediaCardDOM(filteredMedias.indexOf(media));
      mediaSection[0].appendChild(mediaCard);
    });
  }
  //Affichage des likes totaux du photographe
  allLikePhotographe();
}

function allLikePhotographe(){
    //Récuperation de tous les likes
    let photographerAllLike = 0;
    const allLikes = document.querySelectorAll('.like_number');
    allLikes.forEach((like) => {
      photographerAllLike += parseInt(like.innerText);
    });

    const likesDivDom = document.createElement('div');
    likesDivDom.setAttribute('class', 'likes');

    let likesDom = document.createElement('likes');
    likesDom.innerHTML = photographerAllLike + '<span class="fa-solid fa-heart"></span>';

    const footerSection = document.getElementsByClassName('infos');
    footerSection[0].appendChild(likesDivDom);
    likesDivDom.appendChild(likesDom);
  }

async function init() {
  // Récupère les datas des photographes
  const { photographers, media } = await getPhotographers();
  displayData(photographers, media);

}
init();
