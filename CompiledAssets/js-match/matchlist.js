require(['jquery'], function ($) {
  var matchList = {
    $_matches: {},
    $_bracket: {},
    lang: '',
    matchesUpdates: {},
    liveblogUpdate: {},
    init: function () {

      var _this = matchList;

      if (!_cfg) {
        return;
      }

      _this.$_matches = $(".fi-matchlist");
      _this.$_bracket = $(".fi-bracket");
      _this.lang = $("html").attr("lang");

      if (!_this.lang) {
        console.warn("Language not available");
      }

      var $_knockoutTabs = $(".fi-knockout-tabs");
      if ($_knockoutTabs.length) {
        $_knockoutTabs.find("#listview").click(function (e) {
          e.preventDefault();
          $("#fi-list-view").removeClass("hidden");
          $("#fi-bracket-view").addClass("hidden");
          $(this).addClass("active");
          $_knockoutTabs.find("#bracketview").removeClass("active");
        });

        $_knockoutTabs.find("#bracketview").click(function (e) {
          e.preventDefault();
          $("#fi-list-view").addClass("hidden");
          $("#fi-bracket-view").removeClass("hidden");
          $(this).addClass("active");
          $_knockoutTabs.find("#listview").removeClass("active");
        });
      }

      setTimeout(_this.scrollToTodayMatches, 1000);

      _this.updateMatchTimes();

      if (_cfg.events != null) {
        _this.getUpdates();
        setInterval(_this.getUpdates, _cfg.events.polling);
      } else {
        console.warn("POLLING: events settings missing!");
      }

      if (_cfg.pageSwitch != null) {
        _this.getLiveBlogUpdates();
        setInterval(_this.getLiveBlogUpdates, _cfg.pageSwitch.polling);
      } else {
        console.warn("POLLING: pageSwitch settings missing!");
      }

    },

    updateMatchTimes: function () {

      var _this = matchList;
      if (window.TimeConverter) {
        window.TimeConverter.onMyTime();
      }
    },

    scrollToTodayMatches: function (today) {

      var _this = matchList;
      var _pageOffset = 130;
      var _today = new Date();
      var _topOffset = 0;

      if (today) {
        if ($(".fi-mu-list[data-matchesdate='" + today + "']").length) {
          _topOffset = $(".fi-mu-list[data-matchesdate='" + today + "']").offset().top;

        }
      } else {
        if ($(".fi-mu-list.today").length) {
          _topOffset = $(".fi-mu-list.today").offset().top;
        }
      }

      if (_topOffset) {
        Utility.log("_topOffset: ", _topOffset);
        Utility.log("(_topOffset - _pageOffset): ", (_topOffset - _pageOffset));
        window.scrollTo(0, (_topOffset - _pageOffset));
        Utility.log("scrolled");
      }

    },

    getUpdates: function () {
      var _this = matchList;
      $.get(_cfg.events.url, function (data) {
        if (data) {
          _this.matchesUpdates = JSON.parse(data);
          _this.updateMatches();
        }
      });
    },

    getLiveBlogUpdates: function () {
      var _this = matchList;
      $.get(_cfg.pageSwitch.url, function (data) {
        if (data) {
          _this.liveblogUpdate = JSON.parse(data);
          _this.updateBlogIcon();
        }
      });
    },

    updateMatches: function () {
      var _this = matchList;

      Utility.log("_this.matchesUpdates.matches.length: ", _this.matchesUpdates.matches.length);

      for (var i = 0; i < _this.matchesUpdates.matches.length; i++) {
        var _matchData = _this.matchesUpdates.matches[i];
        var $_matchUnit = _this.$_matches.find(".fi-mu[data-id = '" + _matchData.matchid + "']");
        var $_bracketMatchUnit = _this.$_bracket.find(".fi-mu[data-id = '" + _matchData.matchid + "']");

        _this.updateMatchUnit($_matchUnit, _matchData);
        _this.updateMatchUnit($_bracketMatchUnit, _matchData);
      }

    },

    updateMatchUnit: function ($_matchUnit, _matchData) {

      var _this = matchList;

      if (_matchData.updates.isLive) {
        $_matchUnit.addClass("live");
      } else {
        $_matchUnit.removeClass("live");
      }

      if (_matchData.updates.hasHighlights) {
        $_matchUnit.find(".fi-mu__calls__call--hl").removeClass("hidden");
      }

      _this.updateScore($_matchUnit, _matchData);
      _this.updateMinute($_matchUnit, _matchData);
    },

    updateBlogIcon: function () {
      var _this = matchList;
      var matchData = {};
      for (var i = 0; i < _this.liveblogUpdate.liveblog.length; i++) {
        matchData = _this.liveblogUpdate.liveblog[i];

        var $_matchUnit = _this.$_matches.find(".fi-mu[data-id = '" + matchData.matchId + "']");

        if (matchData.status == 'live') {
          $_matchUnit.find(".fi-mu__calls__call--lb").removeClass("hidden");
        } else {
          $_matchUnit.find(".fi-mu__calls__call--lb").addClass("hidden");
        }
      }
    },

    updateScore: function (matchUnit, matchData) {
      var _this = matchList;

      if (matchData.updates.isLive || matchData.updates.period == "post_match" || matchData.updates.period == "abandoned") {
        var _homeScore = matchData.updates.homeScore;
        var _awayScore = matchData.updates.awayScore;

        var _scoreText = [_homeScore, '-', _awayScore].join('');
        if (_this.lang === 'ar-SA') {
          _scoreText = [_awayScore, '-', _homeScore].join('');
        }

        $(matchUnit).find(".fi-s__scoreText").html(_scoreText);
      }

    },

    updateMinute: function (matchUnit, matchData) {
      var _this = matchList;

      var _period = matchData.updates.period;
      var _minute = matchData.updates.minute;

      if (_period && _period !== "live") {
        var $_periodElement = $(matchUnit).find(".fi-s__status").find("." + _period);
        var $_minuteElement = $(matchUnit).find(".fi-s__status").find(".minute");
        $(matchUnit).find(".fi-s__status").find(".period").addClass("hidden");
        $_periodElement.removeClass("hidden");
        $_minuteElement.addClass("hidden");
      } else if (matchData.updates.isLive) {
        var $_periodElement = $(matchUnit).find(".fi-s__status").find(".minute");
        $(matchUnit).find(".fi-s__status").find(".period").addClass("hidden");
        $_periodElement.html(_minute);
        $_periodElement.removeClass("hidden");
      } else {
        $(matchUnit).find(".fi-s__status").find(".period").addClass("hidden");
        var $_periodElement = $(matchUnit).find(".fi-s__status").find(".minute");
        $_periodElement.html(_minute);
      }
    },

    updateScorers: function () {

      var _this = matchList;

      if (!_this.$_homeScorers) {
        _this.$_homeScorers = _this.$_matchHeader.find(".fi-mh__scorers__home");
      }

      if (!_this.$_awayScorers) {
        _this.$_awayScorers = _this.$_matchHeader.find(".fi-mh__scorers__away");
      }


      if (!_this.scorerTemplate) {
        if ($(".fi-mh__scorertemplate").length > 0) {
          _this.scorerTemplate = $(".fi-mh__scorertemplate").html();
          _this.scorerDetailTemplate = $(_this.scorerTemplate).find('.fi-mh__detail_container').html();
          //$(".fi-mh__scorertemplate").remove();
        } else {
          console.warn("scorer template missing!");
          return;
        }
      }

      var _homeTeamScorers = _this.matchesUpdates.updates.homeScorers;
      var _awayTeamScorers = _this.matchesUpdates.updates.awayScorers;

      var _homeScorersMarkup = '';
      var _awayScorersMarkup = '';

      for (var i = 0; i < _homeTeamScorers.length; i++) {
        var _scorer = _homeTeamScorers[i];
        var _scorerMarkup = _this.getScorerMarkup(_scorer);
        _homeScorersMarkup += _scorerMarkup;
      }

      for (var i = 0; i < _awayTeamScorers.length; i++) {
        var _scorer = _awayTeamScorers[i];
        var _scorerMarkup = _this.getScorerMarkup(_scorer);
        _awayScorersMarkup += _scorerMarkup;
      }

      _this.$_homeScorers.find("ul").html(_homeScorersMarkup);
      _this.$_awayScorers.find("ul").html(_awayScorersMarkup);

    },

  };

  $(document).ready(function () {
    matchList.init();
    window.matchList = matchList;

    $(".tabs-nav").on("tabs:change", function (e, tabId) {
      Utility.scrollTop();
    });

  });
});