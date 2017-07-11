var Tree = function(){
    var root = null;
    var Node = function(key){
        this.key = key;
        this.left = null;
        this.right = null;
    }
    this.insert = function(key){
        var node = new Node(key);
        if(root==null){
            root = node;
        }else{
            insertNode(root,node);    
        }
    }
    this.scane = function(){
        scaneTree(root);
    }
    this.max = function(){
        return maxNode(root);
    }
    var maxNode = function(node){
        if(node.right !== null){
          return  maxNode(node.right);
        }else{
            return node.key;
        }

    }
    this.min = function(){
        return  minNode(root);   
    }
    var minNode = function(node){
        if(node.left!==null){
         return   minNode(node.left);
        }
        return node.key;
    }
   
    this.search = function(key){
      return  searchNode(root,key);
    }
    var searchNode = function(node,key){
        if(node === null){
            return false;
        }
        if(node.key > key ){
          return  searchNode(node.left,key);
        }else if(node.key < key){
          return  searchNode(node.right,key);
        }else{
            return true;
        }
    }
    var scaneTree = function(node){
        if(node.left!=null){
            scaneTree(node.left);
        }
        // console.log(node.key);
        if(node.right!=null){
            scaneTree(node.right);
        }
    }
    var insertNode = function(node,newNode){
        if(node.key > newNode.key){
            if(node.left === null){
                node.left = newNode;
            }else{
                insertNode(node.left,newNode);
            }
        }else{
            if(node.right === null){
                node.right = newNode;
            }else{
                insertNode(node.right,newNode);
            }
        }
    }
}
var tree = new Tree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);
tree.insert(1);
tree.scane();
console.log(tree.search(2));
console.log(tree.min());
console.log(tree.max());