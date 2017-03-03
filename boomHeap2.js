export function makeHeap(array,length){
  let lastUnLeaf = Math.floor((length)/2)//下标从1开始
  function buildHeap(index){
    let leftChild = 2*index
    let rightChild = 2*index+1
    let max = 0
    if(rightChild<=length){
      //有左右子节点
      max = array[index-1]>array[leftChild-1]?index:leftChild
      max = array[max-1]>array[rightChild-1]?max:rightChild
      if(max!=index){
        let temp = array[index-1]
        array[index-1] = array[max-1]
        array[max-1] = temp
        buildHeap(max)
      }
    }else if(rightChild>length&&leftChild<=length){
      //只有左子节点
      max = array[index-1]>array[leftChild-1]?index:leftChild
      let temp = array[index-1]
      array[index-1] = array[max-1]
      array[max-1] = temp
      if(max!=index){
        buildHeap(max)
      }

    }
  }
  while(lastUnLeaf>0){
    buildHeap(lastUnLeaf)
    lastUnLeaf--
  }
}

function heapSort(array){
  let right = array.length-1
  makeHeap(array,right+1)
  while(right>0){
    let temp = array[right]
    array[right] = array[0]
    array[0] = temp
    right--
    makeHeap(array,right+1)
  }
}

let array = [16,7,90,20,17,18]
console.log("->:",array)
heapSort(array)
console.log("->:",array)
