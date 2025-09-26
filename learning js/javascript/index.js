let myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/photo1.avif") {
    myImage.setAttribute("src", "images/photo2.avif");
  } else {
    myImage.setAttribute("src", "images/photo1.avif");
  }
});
