let root = document.documentElement;

root.addEventListener("mousemove", e => {
  root.style.setProperty('--mouse-x', e.clientX + "px");
  root.style.setProperty('--mouse-y', e.clientY + "px");
});

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


  let nav = document.querySelector("nav");
  window.addEventListener("scroll", function(){
    nav.classList.toggle("active", window.scrollY > 0)
  })



  let btn  = document.getElementById("dark_mode");
  let btntext = document.getElementById("btntext");
  let icon = document.getElementById("icon");

  btn.onclick =  function(){
  document.body.classList.toggle("darkthem");

  if(  document.body.classList.contains("darkthem")){
    icon.src= "img/sun.png";
    // btntext.innerHTML = "light";
  }
  else{
    icon.src= "img/moon.png";
    // btntext.innerHTML = "dark";
  }

  }



// Get the modal
var modals = document.querySelectorAll(".modal");

// Get the images and insert them inside the modals - use their "alt" text as a caption
var imgs = document.querySelectorAll(".myImg");
var modalImgs = document.querySelectorAll(".img01");
var captionTexts = document.querySelectorAll(".caption");
var closeButtons = document.querySelectorAll(".close");

// Attach click event to each image
imgs.forEach(function(img, index) {
  img.onclick = function() {
    var modal = modals[index];
    var modalImg = modal.querySelector(".img01");
    var captionText = modal.querySelector(".caption");
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    modal.style.display = "block";
  }
});

// Attach click event to each close button
closeButtons.forEach(function(closeButton) {
  closeButton.onclick = function() {
    var modal = this.parentElement;
    modal.style.display = "none";
  }
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  modals.forEach(function(modal) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}
