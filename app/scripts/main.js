//  ------
// This is super crude need to 
// eventually convert this to a more 
// maintainable framework - for demo.
//  ------

var elementsOnPage = '.form-signin, .matches, .landing',
    loginElements  = '.sign-in, .sign-up',
    navItem        = 'nav li';

function formSubmission() {
  $('.form-signin, .form-signup, .landing').addClass('hide');
  $('.matches').removeClass('hide');
}

function showMain() {
  $('.landing').toggleClass('hide');
  $('.navbar,.page-content').toggleClass('hide');
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
$(loginElements).click(formSubmission);
$('.landing .item, .navbar-brand').click(showMain);
