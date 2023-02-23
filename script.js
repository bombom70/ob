document.addEventListener("DOMContentLoaded", () => {
    const state = {
        products: []
    };
    const cardsContainer = document.querySelector(".cards");

    const createCards = () => {
        console.log("QWE");

        state.products.forEach(({title, image, description}) => {
            const card = document.createElement("div");
            const titleCard = document.createElement("h2");
            const imgCard = document.createElement("img");
            const detailTextCard = document.createElement("p");

            card.classList.add("cards-item");
            titleCard.classList.add("cards-item__title");
            imgCard.classList.add("cards-item__image");
            detailTextCard.classList.add("cards-item__text");

            titleCard.textContent = title;
            imgCard.setAttribute('src', image);
            detailTextCard.textContent = description;

            card.appendChild(titleCard);
            card.appendChild(imgCard);
            card.appendChild(detailTextCard);
            cardsContainer.appendChild(card);
        });        
    };

    fetch("https://fakestoreapi.com/products?limit=10")
        .then(res => res.json())
        .then(res => state.products.push(...res))
        .then(createCards);
});
