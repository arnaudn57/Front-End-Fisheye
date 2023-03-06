function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographers/${portrait}`;
    console.log(city);

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        article.setAttribute("role", "region");
        article.setAttribute('tabindex', '3');
        // article.classList.add('photographer-card');

        // Ajout de lien
        const link = document.createElement('a');
        link.href = '../../photographer.html?id=' + id;
        link.setAttribute("aria-label", name);
        link.setAttribute("role", "link");
        link.setAttribute("title", `Visiter la page de profil ${name} ?`)
        // link.setAttribute('tabindex', '0');
        // link.classList.add('photographer-card-link');

        // Ajout de l'image
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", `Photo de profil de: ${name}`);
        // img.classList.add('photographer-card-avatar');

        //Ajout du nom
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        h2.setAttribute("aria-label", "Nom du photographe");
        // h2.classList.add('photographer-card-name');

        //Ajout de la city
        const cityElement = document.createElement( 'h3' );
        cityElement.textContent = `${city}, ${country}`;
        cityElement.setAttribute("aria-label", "Ville et pays du photographe");
        // cityElement.classList.add('photographer-card-city');

        //Ajout de la tagline
        const taglineElement = document.createElement( 'p' );
        taglineElement.textContent = tagline;
        taglineElement.setAttribute("aria-label", "Tag line");
        // taglineElement.classList.add('photographer-card-tagline');

        //Ajout du TJM
        const priceElement = document.createElement( 'div' );
        priceElement.textContent = `${price}€/jour`;
        priceElement.setAttribute("aria-label", "Prix par jour");

        //Constructeur fiche photographe
        article.appendChild(link);
        link.appendChild(img);
        link.appendChild(h2);
        article.appendChild(cityElement);
        article.appendChild(taglineElement);
        article.appendChild(priceElement);

        return (article);
    }

    return { name, picture, getUserCardDOM }
}

export { photographerFactory};
