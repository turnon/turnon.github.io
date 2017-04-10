(function($){
  var nav = location.pathname;
  if(nav !== '/' && !nav.match(/\/archive/)){
    $('.current').removeClass('current');
    $('a[href="' + nav + '"]').closest('li').addClass('current');
  }
}(jQuery));
