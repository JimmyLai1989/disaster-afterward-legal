(function () {
  "use strict";

  var supported = [
    "en",
    "ja",
    "zh-CN",
    "zh-TW",
    "ko-KR",
    "fr-FR",
    "de-DE",
    "es",
    "pt-BR",
    "ru-RU"
  ];

  var interfaceLabels = {
    "en": {
      home: "Home",
      privacy: "Privacy",
      terms: "Terms",
      contact: "Contact",
      language: "Language",
      legal: "Official legal information",
      privacyPage: "Privacy Policy",
      termsPage: "Terms of Use",
      skip: "Skip to content",
      brand: "Disaster Afterward legal center",
      primaryNav: "Primary navigation",
      footerNav: "Footer navigation"
    },
    "ja": {
      home: "ホーム",
      privacy: "プライバシー",
      terms: "利用規約",
      contact: "お問い合わせ",
      language: "言語",
      legal: "公式リーガル情報",
      privacyPage: "プライバシーポリシー",
      termsPage: "利用規約",
      skip: "本文へ移動",
      brand: "Disaster Afterward リーガルセンター",
      primaryNav: "メインナビゲーション",
      footerNav: "フッターナビゲーション"
    },
    "zh-CN": {
      home: "首页",
      privacy: "隐私政策",
      terms: "使用条款",
      contact: "联系",
      language: "语言",
      legal: "正式法律信息",
      privacyPage: "隐私政策",
      termsPage: "使用条款",
      skip: "跳转到正文",
      brand: "Disaster Afterward 法律信息中心",
      primaryNav: "主导航",
      footerNav: "页脚导航"
    },
    "zh-TW": {
      home: "首頁",
      privacy: "隱私政策",
      terms: "使用條款",
      contact: "聯絡",
      language: "語言",
      legal: "正式法律資訊",
      privacyPage: "隱私政策",
      termsPage: "使用條款",
      skip: "跳至主要內容",
      brand: "Disaster Afterward 法律資訊中心",
      primaryNav: "主要導覽",
      footerNav: "頁尾導覽"
    },
    "ko-KR": {
      home: "홈",
      privacy: "개인정보처리방침",
      terms: "이용약관",
      contact: "문의",
      language: "언어",
      legal: "공식 법률 정보",
      privacyPage: "개인정보처리방침",
      termsPage: "이용약관",
      skip: "본문으로 건너뛰기",
      brand: "Disaster Afterward 법률 정보 센터",
      primaryNav: "기본 탐색",
      footerNav: "바닥글 탐색"
    },
    "fr-FR": {
      home: "Accueil",
      privacy: "Confidentialité",
      terms: "Conditions",
      contact: "Contact",
      language: "Langue",
      legal: "Informations juridiques officielles",
      privacyPage: "Politique de confidentialité",
      termsPage: "Conditions d’utilisation",
      skip: "Aller au contenu principal",
      brand: "Centre juridique de Disaster Afterward",
      primaryNav: "Navigation principale",
      footerNav: "Navigation de pied de page"
    },
    "de-DE": {
      home: "Start",
      privacy: "Datenschutz",
      terms: "Bedingungen",
      contact: "Kontakt",
      language: "Sprache",
      legal: "Offizielle rechtliche Hinweise",
      privacyPage: "Datenschutzerklärung",
      termsPage: "Nutzungsbedingungen",
      skip: "Zum Inhalt springen",
      brand: "Rechtsinformationen zu Disaster Afterward",
      primaryNav: "Hauptnavigation",
      footerNav: "Fußzeilennavigation"
    },
    "es": {
      home: "Inicio",
      privacy: "Privacidad",
      terms: "Términos",
      contact: "Contacto",
      language: "Idioma",
      legal: "Información legal oficial",
      privacyPage: "Política de privacidad",
      termsPage: "Términos de uso",
      skip: "Ir al contenido principal",
      brand: "Centro legal de Disaster Afterward",
      primaryNav: "Navegación principal",
      footerNav: "Navegación del pie de página"
    },
    "pt-BR": {
      home: "Início",
      privacy: "Privacidade",
      terms: "Termos",
      contact: "Contato",
      language: "Idioma",
      legal: "Informações jurídicas oficiais",
      privacyPage: "Política de Privacidade",
      termsPage: "Termos de Uso",
      skip: "Ir para o conteúdo principal",
      brand: "Central jurídica do Disaster Afterward",
      primaryNav: "Navegação principal",
      footerNav: "Navegação do rodapé"
    },
    "ru-RU": {
      home: "Главная",
      privacy: "Конфиденциальность",
      terms: "Условия",
      contact: "Связаться",
      language: "Язык",
      legal: "Официальная правовая информация",
      privacyPage: "Политика конфиденциальности",
      termsPage: "Условия использования",
      skip: "Перейти к содержимому",
      brand: "Юридический центр Disaster Afterward",
      primaryNav: "Основная навигация",
      footerNav: "Навигация в нижней части страницы"
    }
  };

  function matchLanguage(value) {
    var language = String(value || "").replace(/_/g, "-");
    var lower = language.toLowerCase();
    for (var index = 0; index < supported.length; index += 1) {
      if (supported[index].toLowerCase() === lower) {
        return supported[index];
      }
    }
    if (
      lower.indexOf("zh-tw") === 0 ||
      lower.indexOf("zh-hk") === 0 ||
      lower.indexOf("zh-mo") === 0 ||
      lower.indexOf("zh-hant") === 0 ||
      lower.indexOf("zh-cht") === 0
    ) {
      return "zh-TW";
    }
    if (lower.indexOf("zh") === 0) {
      return "zh-CN";
    }
    if (lower.indexOf("ja") === 0) {
      return "ja";
    }
    if (lower.indexOf("ko") === 0) {
      return "ko-KR";
    }
    if (lower.indexOf("fr") === 0) {
      return "fr-FR";
    }
    if (lower.indexOf("de") === 0) {
      return "de-DE";
    }
    if (lower.indexOf("es") === 0) {
      return "es";
    }
    if (lower.indexOf("pt") === 0) {
      return "pt-BR";
    }
    if (lower.indexOf("ru") === 0) {
      return "ru-RU";
    }
    if (lower.indexOf("en") === 0) {
      return "en";
    }
    return null;
  }

  function normalize(value) {
    return matchLanguage(value) || "en";
  }

  function preferredBrowserLanguage() {
    var candidates = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || "en"];
    for (var index = 0; index < candidates.length; index += 1) {
      var match = matchLanguage(candidates[index]);
      if (match) {
        return match;
      }
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

  function updateInterfaceLabels(language) {
    var labels = interfaceLabels[language] || interfaceLabels.en;
    document.querySelectorAll("[data-ui-label]").forEach(function (element) {
      var key = element.getAttribute("data-ui-label");
      if (labels[key]) {
        element.textContent = labels[key];
      }
    });
    document.querySelectorAll("[data-ui-aria-label]").forEach(function (element) {
      var key = element.getAttribute("data-ui-aria-label");
      if (labels[key]) {
        element.setAttribute("aria-label", labels[key]);
      }
    });
  }

  function setLanguage(language, updateHistory) {
    var selected = normalize(language);
    document.documentElement.lang = selected;

    document.querySelectorAll("[data-lang-panel]").forEach(function (panel) {
      panel.hidden = panel.getAttribute("data-lang-panel") !== selected;
    });

    document.querySelectorAll("[data-lang-menu]").forEach(function (control) {
      control.value = selected;
    });

    updateInternalLinks(selected);
    updateInterfaceLabels(selected);
    document.title = titleFor(selected);

    if (updateHistory && window.history && window.history.replaceState) {
      var current = new URL(window.location.href);
      current.searchParams.set("lang", selected);
      window.history.replaceState(null, "", current.href);
    }
  }

  document.querySelectorAll("[data-lang-menu]").forEach(function (control) {
    control.addEventListener("change", function () {
      setLanguage(control.value, true);
      var main = document.getElementById("main");
      if (main) {
        main.focus({ preventScroll: true });
      }
    });
  });

  var requested = new URL(window.location.href).searchParams.get("lang");
  setLanguage(requested || preferredBrowserLanguage(), Boolean(requested));
})();
