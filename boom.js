function removeDuplicates(array){
  let newArray = []
  array.forEach(v => newArray.indexOf(v)<0?newArray.push(v):newArray)
  return newArray
}

let array = [1,2,3,1,2,3,1,2,3]

console.log("before",array)
console.log("after",removeDuplicates(array))

function removeDuplicatesSorted(array){
  let index = 2
  for(let i = 2;i<array.length;i++){
    if(array[index-2]!=array[i]){
      array[index] = array[i]
      index++
    }
  }
  return index
}

array = [1,1,1,1,2,2,2,2,3,3,4]

console.log("before",array)
console.log("after",removeDuplicatesSorted(array),array)

function search(array,target){
  let first = 0
  let last = array.length-1
  while (first<=last) {
    let mid = Math.floor((first+last)/2)
    if(array[mid]==target){
      return mid
    }else if(array[first]<=array[mid]){
      if(array[first]<=target&&target<array[mid]){
        last = mid
      }else{
        first = mid+1
      }
    }else{
      if(array[mid]<target&&target<=array[last]){
        first = mid+1
      }else{
        last = mid
      }
    }
  }
  return -1
}

array = [3,4,5,6,7,8,9,0,1,2]
console.log("search:",array[search(array,2)])

function search1(array,target){
  let first = 0;
  let last = array.length-1
  while(first<=last){
    let mid = Math.floor((first+last)/2)
    if(array[mid]==target){
      return mid
    }else{
      if(array[first]<=target&&target<array[mid]){
        last = mid
      }else{
        first = mid+1
      }
    }
  }
  return -1
}
array = [0,1,2,3,4,5,6,7,8,9]

console.log('search1:',array[search1(array,0)])

function findMedianSortedArrays(arrayA,arrayB,k){
  let m = 1;
  let result=-1;
  let i=0,j=0
  for(;i<arrayA.length&&j<arrayB.length&&m<k;){
    if(arrayA[i]<arrayB[j]){
      console.log("B:",arrayB[j])
      i++;
      m++;
      result = arrayA[i]
    }else{
      console.log("A:",arrayA[i])
      j++;
      m++;
      result = arrayB[j]
    }
  }
  while(i<arrayA.length&&m<k){
    result = arrayA[i]
    i++;
    m++;
  }
  while(j<arrayB.length&&m<k){
    result = arrayB[j]
    j++;
    m++;
  }
  return result
}
let array1 = [0,1,2,3,4,5,6,7,8,9]
let array2 = [10,11,12,13,14,15,16,17,18,19]
console.log("->:",findMedianSortedArrays(array1,array2,3))

function findMedianSortedArrays2(arrayA,arrayB,k){
  function findK(aL,aR,bL,bR){
    let aM = Math.floor((aL+aR)/2)
    let bM = Math.floor((bL+bR)/2)
    if(aR==aL) return arrayA[aR]
    if(bR==bL) return arrayB[bR]
    if(arrayA[aM]<arrayB[bM]){
      return findK(aM+1,aR,bL,bR)
    }else if(arrayA[aM]>arrayB[bM]){
      return findK(aL,aR,bM+1,bR)
    }
  }
  return findK(0,k-1,0,k-1)
}

array1 = [0,1,2,3,4,5,6,7,8,9]
array2 = [10,11,12,13,14,15,16,17,18,19]
console.log("->2:",findMedianSortedArrays2(array1,array2,3))
