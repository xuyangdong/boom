function allSubsets(array){
  let selected = array.map(v => false)
  let result = []
  function subjects(selected,step,result){
    if(step == array.length){
      let subject = new Array()
      for(let i = 0;i<array.length;i++){
        if(selected[i]) subject.push(array[i])
      }
      result.push(subject)
      return
    }else{
      selected[step] = false
      subjects(selected,step+1,result)
      selected[step] = true
      subjects(selected,step+1,result)
    }
  }
  subjects(selected,0,result)
  return result
}

let result = [],array = [1,2,2]
console.log(allSubsets(array))
