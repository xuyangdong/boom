function reverse(array,l,r){
  r = r||array.length-1
  while(l<r){
    let temp = array[l]
    array[l] = array[r]
    array[r] = temp
    l++
    r--
  }
}
//下一个字典序的排列，
/**
1、
**/
function next_permutation(array){
  let i = array.length-1
  let j = i-1
  let result = array.slice(0,array.length)
  while(result[j]>result[i]&&i>=0){
    i--;
    j--;
  }
  let partion = result[j]
  i = array.length-1
  while(result[i]<partion){
    i--;
  }
  let temp = partion
  result[j] = array[i]
  result[i] = temp
  reverse(result,j+1)
  return result
}

let array = [6,8,7,4,3,2]
console.log("----",next_permutation(array))

//全排列算法
function permulation(array){
  let result = []
  let step = 0
  let selected = []
  function findAllPermulation(array,step,selected,result){
    if(step==array.length){
      let temp = []
      for(let i = 0;i<array.length;i++){
        temp[i] = selected[i]
      }
      result.push(temp)
    }else{
      for(let i =0;i<array.length;i++){
        if(!selected.find(v => v==array[i])){
          selected[step] = array[i]
          findAllPermulation(array,step+1,selected,result)
          selected.pop()
        }
      }
    }
  }
  findAllPermulation(array,0,selected,result)
  return result
}
array = [1,2,3]
console.log(permulation(array))
