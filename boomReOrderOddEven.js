function ReOrderOddEven(array){
  let start = 0
  let end = array.length-1
  let temp = array[start]
  while(end>start){
    while(!(array[end]&1)&&end>start){
      //不是奇数
      end--
    }
    if(end>start){
      array[start] = array[end]
      start++
    }
    while(array[start]&1&&end>start){
      //是奇数
      start++
    }
    if(end>start){
      array[end] = array[start]
      end--
    }
  }
  array[start] = temp
}
let array = [1,2,3,4,5,6]
ReOrderOddEven(array)
console.log(array)
