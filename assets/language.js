(function () {
  "use strict";

  var supported = ["en", "ja", "zh-CN"];

  function normalize(value) {
    var language = String(value || "");
    if (supported.indexOf(language) !== -1) {
      return language;
    }
    if (language.toLowerCase().indexOf("zh") === 0) {
      return "zh-CN";
    }
    if (language.toLowerCase().indexOf("ja") === 0) {
      return "ja";
    }
    return "en";
  }

  function titleFor(language) {
    var node = document.querySelector(
      '[data-lang-panel="' + language + '"] [data-document-title]'
    );
    return node ? node.textContent.trim() + " · Disaster Afterward" : "Disaster Afterward";
  }

  function updateInternalLinks(language) {
    document.querySelectorAll("[data-lang-link]").forEach(function (link) {
      var raw = link.getAttribute("href");
      if (!raw) {
        return;
      }
      var target = new URL(raw, window.location.href);
      target.searchParams.set("lang", language);
      link.href = target.href;
    });
  }

  function setLanguage(language, updateHistory) {
    var selected = normalize(language);
    document.documentElement.lang = selected;

    document.querySelectorAll("[data-lang-panel]").forEach(function (panel) {
      panel.hidden = panel.getAttribute("data-lang-panel") !== selected;
    });

    document.querySelectorAll("[data-lang-select]").forEach(function (control) {
      var active = control.getAttribute("data-lang-select") === selected;
      if (active) {
        control.setAttribute("aria-current", "true");
      } else {
        control.removeAttribute("aria-current");
      }
    });

    updateInternalLinks(selected);
    document.title = titleFor(selected);

    if (updateHistory && window.history && window.history.replaceState) {
      var current = new URL(window.location.href);
      current.searchParams.set("lang", selected);
      window.history.replaceState(null, "", current.href);
    }
  }

  document.querySelectorAll("[data-lang-select]").forEach(function (control) {
    control.addEventListener("click", function (event) {
      event.preventDefault();
      setLanguage(control.getAttribute("data-lang-select"), true);
      var main = document.getElementById("main");
      if (main) {
        main.focus({ preventScroll: true });
      }
    });
  });

  var requested = new URL(window.location.href).searchParams.get("lang");
  setLanguage(requested || navigator.language || "en", Boolean(requested));
})();
