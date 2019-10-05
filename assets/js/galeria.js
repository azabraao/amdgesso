$(document).ready(function() {
  let folder = document.querySelector('[data-scriptGaleria]').dataset.scriptgaleria;
  loadImages(`galeria/${folder}/`);
})

function loadImages(folder) {
  console.log("folder: "+folder)
  $.ajax({
    url : folder,
    success: function (data) {
      $(data).find("a").attr("href", function (i, val) {
        if( val.toLowerCase().match(/\.(jpe?g|png|gif)$/) ) { 
          console.log('val:'+val);
          let image = "<img src='"+val+"'>";
          addImageToGallery(image);
        } 
      });
    }
  });
}

function addImageToGallery(img) {
  $('.cycle-slideshow').cycle('add',img);
}

function removeImageFromGallery(img) {
  $('.cycle-slideshow').cycle('add',slideIndex - 1);

  if (slideIndex !== 0){
      slideIndex--;
  }
}