import { tri } from '../utils/tri.js'
import { photographerFactory } from '../factories/profil.js'
import { displayMediasGallery } from '../factories/media.js'
import { allLikePhotographe } from '../factories/profil.js'
import { listenerContact } from '../utils/contactForm.js'

//Fetch des données des photographes
async function getPhotographers() {
  let url = './data/photographers.json'
  try {
    let res = await fetch(url)
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

//Récupération de l'id du photographe dans l'url
const queryString_url_id = window.location.search;
//Extraction de l'id
const urlsearchParams = new URLSearchParams(queryString_url_id);
const _id = urlsearchParams.get('id');

async function displayData(photographers, media) {

  //Photgrapher Profile
  const filteredPhotographers = photographers.filter((obj) => obj.id == _id);
  const photographersSection = document.querySelector('.photograph-header');


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
  displayMediasGallery(filteredMedias);

  //Function de mangement du tri
  function manageSort(event){
    const pl = document.querySelectorAll('.photo');
    //Toutes les photos sont supprimées
    pl.forEach((p) => p.remove());
    //function tri from utils/tri.js
    tri(event, filteredMedias);
    //Affichage des medias triés
    displayMediasGallery(filteredMedias);
  }
  //Récuperation des likes des medias + affichage de likes dans le footer
  allLikePhotographe();
}
async function init() {
  // Récupère les datas des photographes
  const { photographers, media } = await getPhotographers();
  displayData(photographers, media);
  listenerContact();
}
init();
