console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded',()=>{
    fetchingImages();
    fetchingBreeds();
}
)

function fetchingImages(){
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImages(json))
}

function renderImages(images){
    const imageContainer = document.getElementById("dog-image-container");
    images.message.forEach(image => {
    const img = document.createElement('img');
    img.src = image;
    imageContainer.appendChild(img);
})
}

function fetchingBreeds(){
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => addBreeds(json))
}

function addBreeds(breeds){
 const list = document.getElementById('dog-breeds');
 const dogBreeds = Object.values(breeds)[0];
Object.keys(dogBreeds).forEach(breed => {
    const dog = document.createElement('li');
    dog.innerHTML = breed;
    const breedList = list.appendChild(dog);
    dog.addEventListener('click', (e)=>{
        e.target.style.color = 'blue';
    })
    const breedSelector = document.getElementById('breed-dropdown');
    breedSelector.addEventListener('change', (e)=>{
        if(e.target.value != breedList.textContent.charAt(0)){
            list.removeChild(dog);
        }
        else{
            list.appendChild(dog);
        }
  });
        });
}
