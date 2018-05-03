
require(['jquery'], function ($) {

  var Spotlight = {

    init: function () {
      //console.log('Spotlight init');
      var ticker = function () {
        setTimeout(function () {
          var $spotlight = $('.js-spotlight:visible');
          if (!$spotlight.find('li:first').is(':hover')) {
            $spotlight.find('li:first').animate({
              marginTop: '-20px'
            }, 800, function () {
              $(this).detach().appendTo($spotlight).removeAttr('style');
            });
          }
          ticker();
        }, 4000);
      };

      ticker();

    }
  };

  $(document).ready(function () {
    Spotlight.init();
  });

  return Spotlight;

});
