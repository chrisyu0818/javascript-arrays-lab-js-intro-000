var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
return kittens.push(name)
}
function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}
function destructivelyRemoveLastKitten() {
  return kittens.pop()
}
function destructivelyRemoveFirstKitten() {
  kittens = kittens.slice(1)
  return kittens
}
function appendKitten(name) {
kittens = appendKitten()
return kittens
}
