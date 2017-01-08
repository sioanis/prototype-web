//  ------
// This is super crude need to 
// eventually convert this to a more 
// maintainable framework - for demo.
//  ------

var elementsOnPage = '.form-signin, .matches, .landing',
    navItem        = 'nav li';

function formSubmission() {
  $('.form-signin, .form-signup, .landing').addClass('hide');
  $('.matches').removeClass('hide');
}

function switchViews() {
  $(navItem).removeClass('active');
  $(this).addClass('active');
  
  var className = $(this).hasClass('signup') ? 'signup' : 'login';

  switch(className) {
    case 'signup' : 
      $(elementsOnPage).addClass('hide');
      $('.form-signup').removeClass('hide');
    case 'login' : 
      $(elementsOnPage).addClass('hide');
      $('.form-signin').removeClass('hide');
    default: 
      break;
  }
}

$(navItem).click(switchViews);
$('.sign-in, .sign-up').click(formSubmission);