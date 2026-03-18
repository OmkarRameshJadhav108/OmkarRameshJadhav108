var wrappy = require("wrappy")
var assert = require("assert")

// Create a wrapper that ensures a function is called only once
var once = wrappy(function (cb) {
  var called = false

  return function () {
    if (called) return
    called = true
    return cb.apply(this, arguments)
  }
})

// Function to test
function printBoo () {
  console.log("boo")
}

// Add custom property
printBoo.iAmBooPrinter = true

// Wrap the function
var onlyPrintOnce = once(printBoo)

// Call multiple times
onlyPrintOnce() // prints "boo"
onlyPrintOnce() // does nothing

// Check property is preserved
assert.equal(onlyPrintOnce.iAmBooPrinter, true)
