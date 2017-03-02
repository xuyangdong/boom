function makeHeap(array){
  let lastUnLeaf = Math.floor(array.length/2)//下标从1开始
  function buildHeap(index){
    let leftChild = 2*index
    let rightChild = 2*index+1
    let min = 0
    if(rightChild<=array.length){
      min = array[index-1]<array[leftChild-1]?index:leftChild
      min = array[min-1]<array[rightChild-1]?min:rightChild
      let temp = array[index-1]
      array[index-1] = array[min-1]
      array[min-1] = temp
      buildHeap(min)
    }
  }
  while(lastUnLeaf>0){
    buildHeap(lastUnLeaf)
    console.log("-->:",lastUnLeaf,array)
    lastUnLeaf--
  }
}

let array = [9,12,17,30,50,20,60,65,4,49]
console.log("->:",array)
makeHeap(array)
console.log("->:",array)
