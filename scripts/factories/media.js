const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const photographerId = urlParams.get('id');

function photographerHeaderProfile(photographe) {
  const { city, country, name, tagline, price } = photographe;
  console.log(city);
  console.log(country);
  console.log(name);
  console.log(tagline);
  console.log(price + "EUR/jour");
}

function photographerMediasProfile(media){
  console.log(media);

};
