// Functions, objects, and events
// Functions, objects, and events
// Dog objects
const dog1 = {
  heading: "Bucket Case",
  image: "images/black-dog.jpg",
  caption: "Just hanging out waiting for water",
  altTag: "Black dog in bucket.",
};

//following same format as before
const dog2 = {
  heading: "Staring in the distance",
  image: "images/gold-dog.jpg",
  caption: "Just staring in the distance",
  altTag: "Gold dog chilling.",
};

const dog3 = {
  heading: "snow dog",
  image: "images/snow-dog.jpg",
  caption: "playing with the snow man",
  altTag: "snow dog playing.",
};
const dog4 = {
  heading: "white dog",
  image: "images/white-dogs.jpg",
  caption: "2 white dogs playing",
  altTag: "2 white dog playing.",
};

function chooseDog(dog) {
  if (dog == 1) {
    loadMe(dog1, 1); // don't put dog1 in quotes or it will pass a string not the object
  } else if (dog == 2) {
    loadMe(dog2, 2);
  } else if (dog == 3) {
    loadMe(dog3, 3);
  } else if (dog == 4) {
    loadMe(dog4, 4);
  }
}
function loadMe(dog, dogNum) {
  document.getElementById("heading" + dogNum).innerHTML = dog.heading;
  document.getElementById("img" + dogNum).src = dog.image;
  document.getElementById("img" + dogNum).style.display = "block";
  document.getElementById("p" + dogNum).innerHTML = dog.caption;
  document.getElementById("img" + dogNum).setAttribute("alt", dog.altTag);
}
