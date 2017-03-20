let time = 0
let result = []
function maxApple(matrix,row,colums){
  if(row==0){
    let maxApple = 0
    for(let i = colums;i>=0;i--){
      result.push([0,i])
      maxApple = maxApple + matrix[0][i]
    }
    return maxApple
  }if(colums==0){
    let maxApple = 0
    for(let i = row;i>=0;i--){
      result.push([i,0])
      maxApple = maxApple + matrix[i][0]
    }
    return maxApple
  }else{
    let a = maxApple(matrix,row-1,colums)
    let b = maxApple(matrix,row,colums-1)
    result.push(a>b?[row-1,colums]:[row,colums-1])
    return Math.max(a,b)+matrix[row][colums]
  }
}

const testMatrix = [
  [1,2,3,4,5,6],
  [6,5,4,3,2,1],
  [1,2,3,4,5,6],
  [6,5,4,3,2,1],
]

console.log(maxApple(testMatrix,3,5))
console.log(result)
