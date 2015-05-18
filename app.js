var button = document.getElementById("button");
var scream = document.getElementById("scream");
var image = document.getElementById("image");
var imageArray = ["scream-one.jpg","scream-two.jpg","scream-three.jpg","scream-four.jpg", "scream-five.jpg", "scream-six.jpg", "scream-seven.jpg", "scream-eight.jpg", "scream-nine.jpg"];

button.addEventListener('mousedown',function(){
  scream.play();
  image.src=""+imageArray[shuffle(imageArray)]+"";
})

button.addEventListener('mouseup',function(){
  scream.pause();
  image.src="";
})

var shuffle = function(array) {
 var newIndex = Math.floor(Math.random() * array.length);
 return newIndex;
};
