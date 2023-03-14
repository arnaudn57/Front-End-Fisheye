function photographerFactory(data) {
  const { name, portrait, city, country, tagline, price } = data
  // console.log(data)
  const picture = `./assets/photographers/${portrait}`

  function getUserPicture() {
    const div = document.createElement('div');
    div.setAttribute('class', 'photoProfil');

    const img = document.createElement('img');
    img.setAttribute('src', picture);
    img.setAttribute('alt', " ");
    img.setAttribute('tabindex', '5');
    img.setAttribute('aria-label', name);
    div.appendChild(img);

    return div;
  }

  function getUserInfo() {
    const div = document.createElement('div');
    div.setAttribute('class', 'info');

    const img = document.createElement('img');
    img.setAttribute('src', picture);
    img.setAttribute('alt', name);

    const h2 = document.createElement('h2');
    h2.setAttribute('tabindex', '2');
    h2.textContent = name;


    const h3 = document.createElement('h3');
    h3.setAttribute('tabindex', '3');
    h3.textContent = city + ',' + ' ' + country;

    const tag = document.createElement('h4');
    tag.setAttribute('tabindex', '3');
    tag.textContent = tagline;

    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(tag);

    return div
  }

  function getUserPriceDom() {
    const div = document.createElement('div');
    div.setAttribute('class', 'prix');

    const prix = document.createElement('prix');
    prix.setAttribute('aria-label', `Le tarif journalier est de ${price}€`)
    prix.textContent = price + '€' + '/' + 'jour';

    div.appendChild(prix);
    return div;
  }


  return { name, picture, getUserPicture, getUserInfo, getUserPriceDom }
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
    likesDom.setAttribute('aria-label', `Le photographe accumule ${photographerAllLike} likes`)
    likesDom.innerHTML = photographerAllLike + '<span class="fa-solid fa-heart"></span>';

    const footerSection = document.getElementsByClassName('infos');
    footerSection[0].appendChild(likesDivDom);
    likesDivDom.appendChild(likesDom);
  }

function incrementAllLikes() {
  const likesDom = document.getElementsByTagName('likes')[0];
  // likesDom.innerHTML = " ";
  likesDom.innerHTML = (parseInt(likesDom.innerText) + 1) + '<span class="fa-solid fa-heart"></span>';
}

function decrementAllLikes() {
  const likesDom = document.getElementsByTagName('likes')[0];
  // likesDom.innerHTML = " ";
  likesDom.innerHTML = (parseInt(likesDom.innerText) - 1) + '<span class="fa-solid fa-heart"></span>';
}

export { photographerFactory, allLikePhotographe, incrementAllLikes, decrementAllLikes }
