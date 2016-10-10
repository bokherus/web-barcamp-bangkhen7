console.log("anchor");
$('.scroll').click(function(event) {
  event.preventDefault();
  $('html,body').animate({
    scrollTop: $(this.hash).position().top
  }, 500);
  return false;
});
