function changeImage(element, index) {
  let img = element.querySelector(".inint-img");
  img.src = `images/image-${index}-hover.svg`;
}

function restoreImage(element, index) {
  let img = element.querySelector(".inint-img");
  img.src = `images/image-${index}.svg`;
}
