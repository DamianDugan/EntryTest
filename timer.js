'use strict'
console.log(`Remaining ${remainingDuration()}`)

function remainingDuration() {
  let end = require('./package.json').end
  let remainingSecs = (end ? end - Date.now() : 0) / 1000
  let remainingMin = Math.floor(remainingSecs / 60)
  return `${remainingMin} min ${remainingSecs - 60 * remainingMin} s`
}
