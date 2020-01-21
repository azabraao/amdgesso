$(document).ready(function () {
  $('.jsGalleryBg').on('click', function () {
    $('.jsGallery').removeClass('is-active');
  });
  $('.jsCallGallery').on('click', function () {
    $('.jsGallery').addClass('is-active');
    let imgIndex = $(this).attr('data-img-index');
    $('.cycle-slideshow').cycle('goto', imgIndex);
  });
})

function loadImages(folder) {
  console.log("folder: " + folder)
  $.ajax({
    url: folder,
    success: function (data) {
      $(data).find("a").attr("href", function (i, val) {
        if (val.toLowerCase().match(/\.(jpe?g|png|gif)$/)) {
          console.log('val:' + val);
          let image = "<img src='" + val + "'>";
          addImageToGallery(image);
        }
      });
    }
  });
}

function addImageToGallery(img) {
  $('.cycle-slideshow').cycle('add', img);
}

function removeImageFromGallery(img) {
  $('.cycle-slideshow').cycle('add', slideIndex - 1);

  if (slideIndex !== 0) {
    slideIndex--;
  }
}