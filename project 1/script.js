
$(window).scroll(function() {
    if ($(window).scrollTop() > 50) {
      $('.navbar').css('background-color', 'white');
      $('.nav-link').css('color', '#00A8A8');
    } else {
      $('.navbar').css('background-color', '#00A8A8');
      $('.nav-link').css('color', 'white');
    }
  });