function productImages() {
  $('.product').on('click', '.btn-buy', function(){
    console.log('Si funciona jQuery :)');
  });
};

$(document).ready(function () {
  console.log('Si funciona jQuery :)');

  $('.mySlider').unslider( {
    nav: false,
    speed: 1000,
    infinite: true
  });
});