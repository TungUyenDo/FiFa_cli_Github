require(['jquery'], function ($) {

  var Standings = {

    $_standings: null,
    $_groupMatches: {},
    init: function () {

      var _this = Standings;
      _this.$_standings = $(".fi-standings");
      $_expandIcons = _this.$_standings.find("tr");
      $_expandIcons.click(this.toggleMatches);
      $_expandMatchesIcon = _this.$_standings.find("tr.fi-table__matches-expand");
      $_expandMatchesIcon.click(this.toggleGroupMatches);
    },
    toggleGroupMatches: function (e) {
      $_expand = $(e.currentTarget);
      $_expandcol = $_expand.parents("tbody").find(".expandrow")

      if ($_expandcol.hasClass("hidden")) {
        $_expandcol.removeClass("hidden");
        $_expand.find(".fi-icon-down").addClass("hidden");
        $_expand.find(".fi-icon-up").removeClass("hidden");
      } else {
        $_expand.find(".fi-icon-down").removeClass("hidden");
        $_expand.find(".fi-icon-up").addClass("hidden");
        $_expandcol.addClass("hidden");
      }
    },
    toggleMatches: function (e) {
      var _this = Standings;

      $_expand = $(e.currentTarget).find(".fi-table__expand");
      $_expandcol = $_expand.parents("tr").next(".expandcol");
      var _idTeam = $_expand.parents("tr").attr("data-team-id");

      if ($_expandcol.hasClass("hidden")) {

        $_standing_table = $_expand.parents(".fi-standings");
        $_groupMatchesLib = $_standing_table.attr("data-item");

        if (_this.$_groupMatches && _this.$_groupMatches[$_groupMatchesLib]) {

          $_expandcol.find("td").html(_this.$_groupMatches[$_groupMatchesLib]);
          _this.filterMatchByTeam($_expandcol, _idTeam);

          window.TimeConverterReinit()

          $_expandcol.removeClass("hidden");
          $_expand.find(".fi-icon-down").addClass("hidden");
          $_expand.find(".fi-icon-close").removeClass("hidden");

        } else {

          $.get($_groupMatchesLib, function (data) {
            _this.$_groupMatches[$_groupMatchesLib] = data;
            $_expandcol.find("td").html(data);
            _this.filterMatchByTeam($_expandcol, _idTeam);

            window.TimeConverterReinit()

            $_expandcol.removeClass("hidden");

            $_expand.find(".fi-icon-down").addClass("hidden");
            $_expand.find(".fi-icon-close").removeClass("hidden");

          });

        }

      } else {
        $_expand.find(".fi-icon-down").removeClass("hidden");
        $_expand.find(".fi-icon-close").addClass("hidden");
        $_expandcol.addClass("hidden");
      }

    },
    filterMatchByTeam: function (expandcol, idTeam) {
      var _matchesData = $(expandcol).find("td").html();

      Standings.initTimeConverter(expandcol);

      $(expandcol).find("td .fi-mu").each(function () {

        $(this).removeClass("hidden");

        var home = $(this).find(".fi-t.home").attr("data-team-id");
        var away = $(this).find(".fi-t.away").attr("data-team-id");

        if (home !== idTeam && away !== idTeam) {
          $(this).remove();
        }

      });
    },
    initTimeConverter: function (expandcol) {
      if (!expandcol) {
        return;
      }

      var _numfixture = 0;
      _numfixture = $(expandcol).find('.fi-mu.fixture').length;

      if (_numfixture === 0) {
        $(expandcol).find('.time-converter').addClass('hidden');
      }
    }
  };

  $(document).ready(function () {
    Standings.init();
  });

  return Standings;
});
define("modules/standings", function(){});


//# sourceMappingURL=standings.js.map