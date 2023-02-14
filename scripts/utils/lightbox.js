export function lightbox(medias, _id, selected_media){
  const { image, video, title, likes, id, date } = medias;

  let filteredMedias = medias.filter((obj) => obj.photographerId == _id)

  let orderMediasLightbox = [];
  let firstMediaLightbox = [];
  filteredMedias.forEach((media) => {
    // console.log(media.title);
    if (media.title !== selected_media) {
      orderMediasLightbox.push(media);
    } else if (media.title == selected_media) {
      firstMediaLightbox.push(media);
    }
  })
  console.log(orderMediasLightbox)
  console.log(firstMediaLightbox);

  const header = document.getElementsByTagName('header');
  header[0].style.display = 'none';

  const main = document.getElementById('main');
  main.style.display = 'none';




  // console.log(allMediasPhotographers[0]);
}


function closeLightbox(){

}
