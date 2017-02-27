function Node(data,left,right){
  this.data = data
  this.left = left
  this.right = right
}
function show(){
  console.log(this.data)
}

function insert(data){
  let node = new Node(data,null,null)
  if(this.root ==null){
    this.root = node
  }else{
    let current = this.root
    let parent = current
    while(true){
      if(current.data<data){
        current = current.left
        if(current = null){
          parent.left = node
          break
        }
      }else{
        current = current.right
        if(current = null){
          parent.right = node
          break
        }
      }
    }
  }
}

function inOrder(){
  
}

function BST(){
  this.root = null
  this.insert = insert
  this.inOrder = order
}
