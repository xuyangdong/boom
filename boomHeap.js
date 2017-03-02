function _max(array,a,b,c){
  let max = array[a-1]>array[b-1]?a:b
  max = array[max-1]>array[c-1]?max:c
  return max
}
function makeHeap(array){
  let firstUnLeaf = Math.floor(array.length/2)
  while(firstUnLeaf>=1){
    let temp = array[firstUnLeaf-1]

    let maxIndex = _max(array,firstUnLeaf,2*firstUnLeaf,2*firstUnLeaf+1)
    array[firstUnLeaf-1] = array[maxIndex-1]
    array[maxIndex-1] = temp
    console.log("--asdf->:",array)
    firstUnLeaf--
  }
}



let array = [1, 3, 4, 5, 7, 2, 6, 8, 0]
console.log("->:",array)
makeHeap(array)
console.log("->:",array)
