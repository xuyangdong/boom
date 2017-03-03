const makeHeap = require('./boomHeap2')
function mergeKArray(){
  let result = []
  let heap = []
  let points = {}
  for(let k in arguments){
    points[k] = arguments[k].length
  }
  for(let k in arguments){
    console.log("K:",k)
    heap.push(arguments[k])
  }
}

mergeKArray([1,2,3],[1,2,3])
