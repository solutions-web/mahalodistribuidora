
jQuery(document).ready(function( $ ) {

// cache container
var $container = $('#produtos');
$container.isotope({
  animationEngine : 'best-available',
  animationOptions: {
    duration: 200,
    queue: false
  },
  layoutMode: 'fitRows'
});

$(window).resize(function() {
  $container.isotope('reLayout');
});

// filter items when filter link is clicked
$('#categorias a').click(function(){
  $('#categorias a').removeClass('actived');
  $(this).addClass('actived');
  var selector = $(this).attr('data-filter');
  $container.isotope({ filter: selector });
  return false;
});

});
