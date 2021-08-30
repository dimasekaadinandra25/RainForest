$(document).ready(function() {
    var classList = ['chameleon', 'deer', 'owl', 'frog'];
    var marvelHeroSlider = new Swiper('.animal-container .swiper-container', {
      loop: false,
      autoplay:true,
      slidesPerView: 1,
      observer: true,
      observeParents: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      on: {
        init: function() {
          var index = this.activeIndex; // current slide index
          $('.animal-container')
            .removeClass(classList)
            .addClass(classList[index]);
  
          $('.animal-container .img-wrapper')
            .removeClass('active')
            .eq(index)
            .addClass('active');
        }
      }
    }).on('slideChange', function() {
      var index = this.activeIndex; // current slide index
      $('.animal-container')
        .removeClass(classList)
        .addClass(classList[index]);
      $('.animal-container .img-wrapper')
        .removeClass('active')
        .eq(index)
        .addClass('active');
    });
    $(window).on('resize', function() {
      marvelHeroSlider.update();
    });
  });