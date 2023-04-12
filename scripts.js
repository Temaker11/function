/* 
  funtion( ) constructor
  * expressão new
  * criar um novo objeto
  * this keyword
*/

function Person(name) {
  this.name = name
  this.walk = function () {
    return this.name + " está andando"
  }
}
const Temaker = new Person("Temaker")
const Zau = new Person("Zau")
console.log(Temaker.walk())
console.log(Zau.walk())