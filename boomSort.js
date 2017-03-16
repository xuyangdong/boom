function boomShellSort(array){
  let gap = array.length/2
  for(let gap = array.length/2;gap>0;gap = gap/2){
    for(let i = gap;i<array.length;i++){
      let temp = array[i]
      for(let j = i;j>gap&&temp<array[j-gap];j = j-gap){
        array[j] = array[j-gap]
      }
      array[j] = temp
    }
  }
}
function merge(array,first,mid,last,temp){
  let l1 = first,r1 = mid,l2 = mid+1,r2 = last
  let k = 0
  while(l1<=r1&&l2<=r2){
    if(array[l1]<array[l2]){
      temp[k] = array[l1]
      l1++
      k++
    }else{
      temp[k] = array[l2]
      k++
      l2++
    }
  }
  while(l1<=r1){
    temp[k]=array[l1]
    k++
    l1++
  }
  while(l2<=r2){
    temp[k]=array[l2]
    k++
    l2++
  }
  for(let i = 0;i<=k;i++){
    array[first+i] = temp[i]
  }
}
function mergeSort(array){
  let temp = []
  function mainProcess(array,first,last,temp){

    if(first<last){
      let mid = Math.floor((first+last)/2)
      mainProcess(array,first,mid,temp)//对左边排序
      mainProcess(array,mid+1,last,temp)//对右边排序
      merge(array,first,mid,last,temp)//合并左右两边
    }
  }
  mainProcess(array,0,array.length-1,temp)
}

let array = [1,3,4,52,8,4,5,6]
mergeSort(array)
console.log("asdf:",array)
