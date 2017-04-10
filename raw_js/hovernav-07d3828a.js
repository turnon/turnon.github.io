(function($){
  var nav = location.pathname;
  if(nav !== '/'){
    $('.current').removeClass('current');
    $('a[href="' + nav + '"]').closest('li').addClass('current');
  }
}(jQuery));
