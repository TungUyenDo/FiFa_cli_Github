require(['jquery'], function ($) {
  var RankingHP = {
    init: function () {

      $('.fi-select-wrapper.fi-select__ranking').fi_select();

      $(".fifa-ranking-section__nav a").on("click", function () {
        var _id = $(this).parent().data("value");
        RankingHP.setRankingModuleVisibility(_id);
      });

      $("select.fifa-ranking-section__nav").on("change", function () {
        var _id = $(this).val();
        RankingHP.setRankingModuleVisibility(_id);
      });
    },
    setRankingModuleVisibility: function (id) {
      $('.fifa-ranking-section__content').removeClass('fi-module-ranking__content--active');
      $('.fi-Ranking__logo').removeClass('hidden');
      $('#' + id).addClass('fi-module-ranking__content--active');
      $('.fi-Ranking__logo:not([data-attr="' + id + '"])').addClass('hidden');
    }
  }

  $(document).ready(function () {
    RankingHP.init();
  });

  return RankingHP;
});