const hoistNonReactStatics = require('hoist-non-react-statics');

module.exports = {
  "loadLocaleFrom": (lang, ns) => {
    // You can use a dynamic import, fetch, whatever. You should
    // return a Promise with the JSON file.
    console.log('------------- lang:', lang);
    console.log('------------- ns:', ns);
    return import(`./app/locales/${lang}/${ns}.json`).then((m) => m.default)
  },
  "locales": ["vi", "en"],
  "defaultLocale": "vi",
  "pages": {
    "*": ["common", "menu", "header", "layout"],
    "/": ["home"]
  },
  staticsHoc: hoistNonReactStatics,
}
