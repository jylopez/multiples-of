module.exports = function (multiples, max) {
  var a = [];
  for (var i = 0; i < max; i++) {
    if (multiples.filter((n) => {return i % n === 0}).length > 0) {
      a.push(i)
    }
  }

  return a
}
