(function($){
  $('.toc-button').on('click', function(e){
    e.preventDefault();
    $('nav').toggleClass('toc_expanded');
  })
})(jQuery);
