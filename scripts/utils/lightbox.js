export function lightbox(){
// console.log('Lightbox function')
const lightboxEvent = document.querySelectorAll('.photo');
  console.log(lightboxEvent[0].innerHTML)
  lightboxEvent.forEach((photo) => photo.addEventListener('click', (event) => getMediaId()));
}

function getMediaId(){
  console.log('getMediaId function')
}
