require('systemjs')
System.config({
  baseURL: 'public/'
})
require('./public/jspm.browser')
require('./public/jspm.config')

require('babel-register')

const Mocha = require('mocha')
const glob = require('glob')
const jsdom = require('jsdom')
const mocha = new Mocha()

const doc = jsdom.jsdom('<!doctype html><html><body><script></script></body></html>')
const win = doc.defaultView
global.document = doc
global.window = win

propagateToGlobal(win)

// from mocha-jsdom https://github.com/rstacruz/mocha-jsdom/blob/master/index.js#L80
function propagateToGlobal (window) {
  for (let key in window) {
    // console.log(key)
    if (!window.hasOwnProperty(key)) continue
    if (key in global) continue

    global[key] = window[key]
  }
}

glob('test/**/*.js', function (err, files) {
  var file, i, len
  if (err) {
    throw err
  }
  for (i = 0, len = files.length; i < len; i++) {
    file = files[i]
    mocha.addFile(file)
  }
  mocha.ui('bdd')
  return mocha.run(function (failures) {
    return process.exit(failures)
  })
})
