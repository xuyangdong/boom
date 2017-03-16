function Animal(name){
  this.name = name
  this.sleep = function (){
    console.log("正在睡觉")
  }
}

Animal.prototype.eat = function(food){
  console.log("正在吃东西:",food)
}

function Cat(name){
  Animal.call(this,name)
  // this.name = name||'Tom'
}

let cat = new Cat('CCat')
console.log(cat.name)
cat.sleep()
cat.eat("猫粮")
// function Cat(){}
// console.log(Cat)
