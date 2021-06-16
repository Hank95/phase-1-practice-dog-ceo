console.log("%c HI", "color: firebrick");

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

function init() {
  fetch(imgUrl)
    .then((response) => response.json())
    .then((json) => renderPhotos(json.message));

  fetch(breedUrl)
    .then((response) => response.json())
    .then((json) => {
      console.log(Object.keys(json.message).filter((dog) => dog[0] === "c"));
      renderBreeds(Object.keys(json.message));
      filterBreeds(Object.keys(json.message));
    });
}

// document.querySelectorAll("li").forEach((item) => {
//   console.log(item);
//   item.addEventListener("click", (e) => console.log(e));
// });
const renderPhotos = function (photos) {
  const dogContainer = document.querySelector("#dog-image-container");
  console.log(photos);
  photos.forEach((image) => {
    const photo = new Image();
    photo.src = image;
    dogContainer.appendChild(photo);
  });
};

const filterBreeds = function (breeds) {
  const dropDown = document.querySelector("#breed-dropdown");
  dropDown.addEventListener("change", (e) => {
    console.log(e.target.value);
    const filterDog = breeds.filter((dog) => dog[0] === e.target.value);
    console.log(filterDog);
    renderBreeds(filterDog);
  });
};

const renderBreeds = function (breeds) {
  const dogBreedsContainer = document.querySelector("#dog-breeds");
  breeds.forEach((breed) => {
    const li = document.createElement("li");
    li.className = "list-item";
    li.innerText = breed;
    dogBreedsContainer.appendChild(li);
    li.addEventListener("click", (e) => (li.style.color = "red"));
  });
};

document.addEventListener("DOMContentLoaded", function () {
  init();
  const listItems = document.querySelectorAll(".list-item");
  console.log(listItems);
});

window.addEventListener("load", function () {
  const listItems = document.querySelectorAll(".list-item");
  console.log(listItems);
});
