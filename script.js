var slideshow = setInterval(nextImage, 2000);

function nextImage() {
  var activeImage = $('.images img.active');
  var activeCircle = $('.nav i.active');

  activeImage.removeClass('active');
  activeCircle.removeClass('active');

  var nextImage = activeImage.next('img');

  if (nextImage.length != 0) {
    nextImage.addClass('active');
    activeCircle.next('i').addClass('active');
  } else {
    $('.images img').first().addClass('active');
    $('.nav i').first().addClass('active');
  }
}
