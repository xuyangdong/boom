function print1ToMaxOfNDigits(n){
  let result =[]
  let selected = []
  let step = 0
  function process(step,selected){
    if(step == n){
      let temp = selected.slice(0)
      result.push(temp)
    }else{
      for(let i = 0;i<10;i++){
        selected.push(i)
        process(step+1,selected)
        selected.pop()
      }
    }
  }
  process(step,selected)
  return result
}
console.log(print1ToMaxOfNDigits(1))

function increment(number){
  let numArray = number.toString().split('')
  let left = 0
  let end = numArray.length-1
  let isOverflow = false
  while(end>=left){
    if(end==0) {
      isOverflow = (+numArray[end])+1>9||(+numArray[end])>9?true:false
      end--
    }else{
      numArray[end] = ((+numArray[end])+1)+''
      if(+numArray[end]>9){
        numArray[end-1] = ((+numArray[end-1])+1)+''
        numArray[end] = '0'
      }
      end--
    }
  }
  if(isOverflow){
    return new Error("溢出")
  }else{
    return numArray.join('')
  }

}

console.log(increment(199).toString())
