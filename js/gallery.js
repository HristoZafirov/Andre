var timer = null;
var images = [];

function showNextTimer() {
  var img = images.shift();
  img.className = "";
  images[0].className = "current";
  images.push(img);
}

function showNext() {
  if (timer != null) {
    clearInterval(timer);
	timer = null;
  }
  
  showNextTimer();
}

function showPrev() {
  if (timer != null) {
    clearInterval(timer);
	timer = null;
  }
	
  var img = images.pop();
  images[0].className = "";
  img.className = "current";
  images.unshift(img);
}

window.addEventListener('load', function() {
  var imgs = document.querySelectorAll('gallery > img');
  
  for(var i = 0; i < imgs.length; i++)
    images.push(imgs[i]);
	
  images[0].className = "current";
  
  timer = setInterval(showNextTimer, 3000);
});