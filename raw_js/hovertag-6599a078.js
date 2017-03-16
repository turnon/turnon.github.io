(function($, loc){
  $('.tags .post-tag').each(function(){
    var t=$(this);
    var wanted = loc.search.replace("?tag=","");
    if(wanted === t.find('span')[0].innerText){
      t.addClass('hovertag');
      return false;
    }
  });
})(jQuery, location);
