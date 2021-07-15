function Rand() {

var random = Math.floor(Math.random() * 100);
console.log(random)

document.getElementById("Text").innerHTML = random;

}