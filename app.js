var button = document.getElementById("button");
var scream = document.getElementById("scream");
var image = document.getElementById("image");
var imageArray = ["scream-one.jpg","scream-two.jpg","scream-three.jpg","scream-four.jpg"];
var i = 0;
button.addEventListener('mousedown',function(){
  scream.play();
  image.src=""+imageArray[i]+"";
})

button.addEventListener('mouseup',function(){
  scream.pause();
  image.src="";
  i++;
})
