const idMap = require('./names/id');
const enMap = require('./names/en');
const itMap = require('./names/it');
const esMap = require('./names/es');
const frMap = require('./names/fr');

/**
 * Gender detection from first name and optional language
 * @param {String} name First name
 * @param {String} [lang] Language
 * @return {String} male, female, unknown
 */
function getGender(name, lang = 'all') {
  if (!name) {
    return 'unknown';
  }
  // Lowercase name and lang to make the match
  name = name.toLowerCase();
  lang = (lang || 'all').toLowerCase();
  const maps = {
    id: idMap,
    en: enMap,
    it: itMap,
    es: esMap,
    fr: frMap,
    all: new Map([...idMap, ...enMap, ...itMap, ...esMap, ...frMap]),
  };
  // Use the Map of input language, or use all
  const mapToUse = maps[lang] || maps.all;
  // Get the gender from the language Map or try with all, otherwise is unknown
  const result = mapToUse.get(name) || maps.all.get(name) || 'unknown';
  return result;
}

/**
 * Get firstname from fullname
 * @param {String} fullname
 * @return {String} firstname
 */
const getFirstNameFromFullName = function(fullName) {
  return fullName
    .toLowerCase()
    .replace(/^\s+|^0-9+|[^a-z-úñäâàáéèëêïîöôùüûœç\- ]+/g, '')
    .split(/\s/)[0];
}

/**
 * Gender detection from fullname and optional language
 * @param {String} name Fullname
 * @param {String} [lang] Language
 * @return {String} male, female, unknown
 */
const detect = function(fullName, lang = 'all') {
  const firstName = getFirstNameFromFullName(fullName);
  return getGender(firstName, lang);
}

exports.detect = detect;
