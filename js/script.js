(function($) {
    
  var allPanels = $('.location_accordion > .accordion_details').hide();
  var headings = ('.accordion_title > h3');

  $('.accordion_title > h3').click(function() {
    allPanels.slideUp();
    $(headings).removeClass('white');
    $(this).parent().next().slideDown();
    $(this).addClass('white');
    return false;
  });

})(jQuery);