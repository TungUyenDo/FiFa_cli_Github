require(['jquery'], function ($) {

  var tabsManager = {
    currentTab: null,
    build: function (options) {
      var $tabsContainer = $(options.selector);
      var loadLibrariesFromAjax = $tabsContainer.data('useajax');

      $tabsContainer.find("[data-tab-id]").each(function () {
        var $this = $(this);

        $this.on("click", function (e) {
          e.preventDefault();
          var tabId = $(this).attr("data-tab-id");
          tabsManager.show({ tabId: tabId });
        });
      });

      var currentTabId, urlTabId = window.location.hash.substr(1);

      var tabsOnPage = $("[data-tab]");
      tabsOnPage.each(function () {
        if (urlTabId == $(this).attr("data-tab")) {
          currentTabId = urlTabId;
        }
      });

      if (currentTabId == undefined) {
        currentTabId = tabsOnPage.first().attr("data-tab");
      }

      tabsManager.show({ tabId: currentTabId });
    },
    show: function (options) {
      $("[data-tab]").hide();
      $("[data-tab='" + options.tabId + "']").show();

      $("[data-tab-id]").removeClass("active");
      $("[data-tab-id='" + options.tabId + "']").addClass("active");

      $(".tabs-nav").trigger("tabs:change", options.tabId);
      
      $(".tab-main-container").attr("data-current-tab", options.tabId);
    }

  };

  $(document).ready(function () {
    tabsManager.build({ selector: "[data-tabs-container]" });
    window.tabsManager = tabsManager;

    if ($('.tabs-nav').data("issticky")) {

      var stuck = false;
      var stickPoint = getDistance($('.tabs-nav__content'));

      function getDistance(el) {
        var topDist = el[0].getBoundingClientRect().top + window.scrollY;
        return topDist;
      }

      window.onscroll = function (e) {

        

        var _height = $('.tabs-nav').height() + $('.fi-section-header').height();
        var distance = getDistance($('.tabs-nav__content')) - window.pageYOffset;
        var offset = window.pageYOffset;
        var flickeringArea = { top: 100, bottom: 300 };
        
        if (offset < flickeringArea.top || offset > flickeringArea.bottom) {
          if ((distance <= 0) && !stuck) {
            $('.fi-section-header').addClass('navbar-fixed-top');
            $('.tabs-nav').addClass("affix");
            $('.content-wrap.fi-basic-template').css({
              "margin-top": _height
            })
            stuck = true;
          } else if (stuck && (offset <= stickPoint)) {
            $('.fi-section-header').removeClass('navbar-fixed-top');
            $('.tabs-nav').removeClass("affix");
            $('.content-wrap.fi-basic-template').css({
              "margin-top": "0px"
            })
            stuck = false;
          }
        }

      }

    }


  });

});
define("modules/tabsManager", function(){});


//# sourceMappingURL=tabsManager.js.map