const IMAGE_CAT_PARH = 'https://api.thecatapi.com/v1'
const IMAGE_DOG_PATH = 'https://api.thedogapi.com/v1'
const IMAGE_FOX_PATH = 'https://randomfox.ca';

const getCard = (content) => {
    return `
        <div class="card card-border">
            <img src="${content.url ?? content.image}" class="card-img-top">
        </div>
    `;
}

const getRandomCatImage = (limit = 1) => {
    fetch(`${IMAGE_CAT_PARH}/images/search?limit=${limit}`)
        .then((res) => res.json())
        .then((content) => {
           const card = getCard(content[0]);
           const element = document.getElementById('single-cat-image');
           element.innerHTML = card
        })

}


const getRandomDogImage = () => {
    fetch(`${IMAGE_DOG_PATH}/images/search?limit=1`)
        .then((res) => res.json())
        .then((content) => {
            const card = getCard(content[0]);
            const element = document.getElementById('single-dog-image');
            element.innerHTML = card;
        })
}

const getRandomFoxImage = () => {
    fetch(`${IMAGE_FOX_PATH}/floof/`)
        .then((res) => res.json())
        .then((content) => {
            const card = getCard(content);
            const element = document.getElementById('single-fox-image');
            element.innerHTML = card;
        })
}