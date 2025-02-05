// Gallery Stacking Image
//Get all image container
let childElement = document.querySelectorAll(".image-container");

//Array of image URLs
let imageUrls = [
    "static/images/project-game.png", 
    "static/images/project-grogu.png", 
    "static/images/project-hike.png", 
    "static/images/project-kmc.png", 
    "static/images/project-roku.png"
];


//Initial z-index value
let zIndex = 1;

//Iterate through each image container
childElement.forEach((element, index) => {
  //Create an image element
  let img = document.createElement("img");
  img.setAttribute("src", imageUrls[index]);
  img.setAttribute("class", "image");
  element.appendChild(img);

  //Add a click event listener to each image container
  element.addEventListener("click", () => {
    zIndex++;
    element.style.right = "50em";
    element.style.zIndex = zIndex.toString();
    element.style.transform = "rotate(0deg)";

    //Apply transition to right property
    element.style.transition = " right 0.3s ease";

    //Remomve the class and reset properties after a delay
    setTimeout(() => {
      zIndex -= 3;
      element.style.right = "";
      element.style.zIndex = zIndex.toString();
      element.style.transform = "";

      //Clear the transition property after a slight delay
      setTimeout(() => {
        element.style.transition = "";
      }, 300);
    }, 1000);
  });
});