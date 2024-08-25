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
const imagesList = document.querySelector("ul.gallery");
imagesList.style.display = "flex";
imagesList.style.gap = "20px";
imagesList.style.flexDirection = "column";
imagesList.style.listStyle = "none";

const markup = images
  .map(
    ({ url, alt }) =>
      `<li>
    <img src="${url}" alt="${alt}">
  </li>`
  )
  .join("");

imagesList.insertAdjacentHTML("afterbegin", markup);

const imageElements = imagesList.querySelectorAll("img");
imageElements.forEach((img) => {
  img.style.maxWidth = "500px";
  img.style.height = "auto";
});
