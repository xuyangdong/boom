function show(){
  // console.log(this.data)
  return this.data
}

function Node(data,left,right){
  this.data = data
  this.left = left
  this.right = right
  this.show = show
}

function insert(data){
  let that = this
  let node = new Node(data,null,null)
  if(this.root ==null){
    this.root = node
  }else{
    let current = this.root
//根节点最大
    while(true){
      let parent = current
      if(current.data<data){
        current = current.left
        if(current == null){
          parent.left = node
          break
        }
      }else{
        current = current.right
        if(current == null){
          parent.right = node
          break
        }
      }
    }
  }
}
// function insert(data) {
//     var n = new Node(data, null, null);
//     if (this.root == null) {
//         this.root = n;
//     }
//     else {
//         var current = this.root;
//         var parent;
//         while (true) {
//             parent = current;
//             if (data < current.data) {
//                 current = current.left;
//                 if (current == null) {
//                     parent.left = n;
//                     break;
//                 }
//             }
//             else {
//                 current = current.right;
//                 if (current == null) {
//                     parent.right = n;
//                     break;
//                 }
//             }
//         }
//     }
// }
function getInOrderFun(node){
  let outPutTree = []
  return function inOrder(node){

    if(!(node==null)){
      inOrder.call(this,node.left)
      outPutTree.push(node.show())
      inOrder.call(this,node.right)
    }
    return outPutTree
  }

}

function BST(){
  this.root = null
  this.outPutTree = new Array()
  this.insert = insert
  this.inOrder = getInOrderFun()
}

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
console.log("Inorder traversal: ");
console.log("-->:",nums.inOrder(nums.root).join(','))
