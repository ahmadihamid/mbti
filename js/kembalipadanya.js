$('body').prepend('<a href="#" class="back-to-top">Back to Top</a>');

  var amountScrolled = 300;
$(window).scroll(function() {
  if ( $(window).scrollTop() > amountScrolled ) {
    $('a.back-to-top').fadeIn('slow');
  } else {
    $('a.back-to-top').fadeOut('slow');
  }
});

$('a.back-to-top').click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 700);
  return false;
});

function disclaimer() {
    alert("halo kakak, penulis enggak bertanggungjawab lho dengan apa pun/kapan pun/dimana pun yg terjadi bekaitan dengan konten aplikasi ini, semua hak cipta kembali ke pemilik masing-masing, saya cuma koding logicnya aja :v");
}
