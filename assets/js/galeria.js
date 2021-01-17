$(document).ready(function () {
  $(".jsGalleryBg").on("click", function () {
    $(".jsGallery").removeClass("is-active");
  });

  $(".jsCallGallery").on("click", function () {
    
    $(".jsGallery").addClass("is-active");
    let allImages = document.querySelectorAll(".cycle-slideshow img");
    let arrImages = Array.from(allImages);
    let clickedImgSrc = $(this).attr("src");

    arrImages.find((item, index) => {
      let itemSrc = $(item).attr("src");
      let foundImageInSlide = itemSrc === clickedImgSrc;
      
      if (foundImageInSlide) {
        $(".cycle-slideshow").cycle("goto", index == 0 ? 0 : index - 1);
        return;
      }
    });
  });
});

function loadImages(folder) {
  console.log("folder: " + folder);
  $.ajax({
    url: folder,
    success: function (data) {
      $(data)
        .find("a")
        .attr("href", function (i, val) {
          if (val.toLowerCase().match(/\.(jpe?g|png|gif)$/)) {
            console.log("val:" + val);
            let image = "<img src='" + val + "'>";
            addImageToGallery(image);
          }
        });
    },
  });
}

function addImageToGallery(img) {
  $(".cycle-slideshow").cycle("add", img);
}

function removeImageFromGallery(img) {
  $(".cycle-slideshow").cycle("add", slideIndex - 1);

  if (slideIndex !== 0) {
    slideIndex--;
  }
}
