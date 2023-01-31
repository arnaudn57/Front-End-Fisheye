// Récuperation de l'id du photographe dans l'url
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const photgrapherId = urlParams.get('id');
console.log(photgrapherId);

//Récuperer infos photographe

//Récuperer les medias du photographe
