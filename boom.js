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

function longestConsecutive(nums){
  let length = 0
  let longest = 0
  let used = nums.reduce((pre,cur)=>{
    pre[cur] = false
    return pre
  },{})

  nums.forEach(v => {
    length = 0
    if(!used[v]){
      used[v] = true
      length ++
      for(let i = v+1;(typeof used[i])!='undefined';i++){
        used[i] = true
        length++
      }
      for(let i = v-1;(typeof used[i])!='undefined';i--){
        used[i] = true
        length++
      }
      longest = longest>length?longest:length
    }
  })
  return longest
}
array = [100, 4, 200, 1, 3, 2,5,6,201,202,203,204,205,206,207,208]
console.log("-->:",longestConsecutive(array))

function twoSum(array,target){
  let dataMap = array.reduce((pre,cur,index)=>{
    pre[cur] = index
    return pre
  },{})
  for(let data in dataMap){
    let restData = target-data
    if(dataMap[restData]){
      return dataMap[data]<dataMap[restData]?[dataMap[data],dataMap[restData]]:[dataMap[restData],dataMap[data]]
    }
  }
  return []
}
array = [100, 4, 200, 1, 3, 2,5,6,201,202,203,204,205,206,207,208]
console.log("-->:",twoSum(array,204))

function threeSum(array,target){
  array.sort()
  let result = []
  for(let k = 0;k<array.length;k++){
    let i=0,j=array.length-1
    for(;i<k&&j>k;){
      if(array[i]+array[k]+array[j]<target){
        i++
      }else if(array[i]+array[k]+array[j]>target){
        j--
      }else{
        result.push({i,k,j})
        i++
        j--
      }
    }
  }
  return result
}

array = [-1,0,1,2,-1,-4]
console.log(array.sort())
console.log("-->:",threeSum(array,0))
