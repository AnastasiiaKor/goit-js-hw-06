const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryEl = document.querySelector(".gallery");
galleryEl.style.display = "flex";
galleryEl.style.flexDirection = "column";
galleryEl.style.alignItems = "center";
galleryEl.style.rowGap = "40px";

const elements = [];

images.map((image) => {
  const element = document.createElement("li");
  element.insertAdjacentHTML(
    "afterbegin",
    `<img src=${image.url} alt="${image.alt}" width="900" height="500"/>`
  );
  element.style.listStyle = "none";
  elements.push(element);
});

galleryEl.append(...elements);
