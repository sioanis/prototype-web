// This is super crude I'm gonna eventually convert this to a more maintainable framework.

$('.sign-in,.sign-up').click(function() {
  $('.form-signin,.form-signup').addClass('hide');
  $('.matches').removeClass('hide');
});

$('nav li').click(function() {
  $('nav li').removeClass('active');
  $(this).addClass('active');
  
  if ($(this).hasClass('signup')) {
    $('.form-signin,.matches').addClass('hide');
    $('.form-signup').removeClass('hide');
  } else if ($(this).hasClass('login')) {
    $('.form-signup,.matches').addClass('hide');
    $('.form-signin').removeClass('hide');
  }

});