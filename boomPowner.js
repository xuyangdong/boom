function Power(base,exponent){
  if(base==0&&exponent<0){
    return new Error('参数错误')
  }else if(base ==0&&exponent==0){
    return 0
  }
  let e = Math.abs(exponent)
  let result = 1
  for(let i = 0;i<e;i++){
    result = result * base
  }
  return exponent>0?result:"1/"+result
}

function Power2(base,exponent){
  if(base==0&&exponent<0) return new Error("参数错误")
  if(exponent<0) return "1/"+Power2(base,-exponent)
  if(exponent===1){
    return base
  }else if(exponent>1&&exponent<2){
    return base
  }else{
    return exponent&1?Power2(base,exponent/2)*Power2(base,exponent/2)*base:Power2(base,exponent/2)*Power2(base,exponent/2)
  }
}

console.log("--->:",Power2(2,-5))
