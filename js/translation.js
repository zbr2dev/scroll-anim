(function ($) {
  $(window).ready(function () {
    const load = (key) => {
      try {
        const serializedState = localStorage.getItem(key);

        return serializedState === null ? undefined : serializedState;
      } catch (err) {
        console.error("Get state error: ", err);
      }
    };

    const save = (key, value) => {
      try {
        const serializedState = value;
        localStorage.setItem(key, serializedState);
      } catch (err) {
        console.error("Set state error: ", err);
      }
    };

    const language = load("language") || "en";

    document.translate = function translate(lang = "en") {
      save("language", lang);

      const variants = document.getElementsByClassName("translation");
      const translation = {};

      Array.from(variants).forEach((variant) => {
        if (variant.dataset.lang === lang)
          translation[variant.dataset.name] = variant.innerHTML;
      });

      const translated = document.getElementsByClassName("translated");
      Array.from(translated).forEach((translatedItem) => {
        if (translation.hasOwnProperty(translatedItem.dataset.name))
          translatedItem.innerHTML = translation[translatedItem.dataset.name];
      });
    };

    // const userLang = navigator.language || navigator.userLanguage;

    document.translate(language);
  });
})(jQuery);
