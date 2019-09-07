'use strict'
/* # Exercice: Camel To Kebab
 *
 * ## Explanation:
 * You must code a function that transforms a string from camelCase (see Further Notice) to
 * kebab-case (see Further Notice). This function must not break abreviations.
 *
 * ## Example:
 *```
 *camelToKebab('CamelCaseString') === 'camel-case-string'
 *camelToKebab('CamelCaseStringWithABREV') === 'camel-case-string-with-abrev'
 *camelToKebab('CamelCaseStringWithABREVInCenter') === 'camel-case-string-with-abrev-in-center'
 *```
 *
 * ## Expected Time
 * You should spend around 15 minutes on this exercice
 *
 * ## Further Notice
 * - You have more examples in <root>/validations/1-fizzBuzz.validation.js
 * - See [camelCase](https://en.wikipedia.org/wiki/Camel_case)
 * - See [kebabCase](http://wiki.c2.com/?KebabCase)
 */

function camelToKebab(str) {
  let parts = [];

  let curPart = -1;

  for (let i = 0; i < str.length; i++) {
      let chr = str[i];

      let nextTerminated = (
          // Start terminated
          i==0
          ||
          // End terminated
          i==str.length
          ||
          // Upper to lower terminated
          (isUpperCase(chr) && isLowerCase(str[i+1]))
          ||
          // Lower to Upper terminated
          (isUpperCase(chr) && isLowerCase(str[i-1]))
          ||
          // Char and number mix terminated
          (isCharNumber(chr) == !isCharNumber(str[i-1]))
      );

      if(nextTerminated) {
          curPart+=1;
          parts.push("");
      }

      parts[curPart] += chr.toLowerCase();
  }

  return parts.join("-");
}

function isUpperCase(char) {
  if (!char)  { return }
  return char.toUpperCase() === char;
}

function isLowerCase(char) {
  if (!char) { return }
  return char.toLowerCase() === char;
}

function isCharNumber(char) {
  return !isNaN(char);
}

module.exports = camelToKebab
