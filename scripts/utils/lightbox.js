export function lightbox(medias, _id){
  // const { image, video, title, likes, id, date } = data;
  const photographerid = _id;
  console.log(medias.filter((obj) => obj.photographerId == photographerid));
  const allMediasPhotographers = document.getElementsByClassName('titre');


  // console.log(allMediasPhotographers[0]);
}
