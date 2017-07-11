// 树结构遍历 树结构遵循 左边的子节点<本节点<右边的子节点 最小值肯定位于左下角 最大值肯定位于右下角
function BinarySearchTree(){
    var Node = function(key){
        this.key = key ;
        this.left = null;
        this.right = null;
    };
    var root = null ;
    this.insert = function(key){
        var newNode = new Node(key);
        if(root ===null){
            root = newNode;
        }else{
            insertNode(root,newNode);
        }
    }
    this.inOrderTraverse = function(callback){
        inOrderTraverseNode(root,callback);
    }
    this.search = function(key){
      return  searchNode(root,key);
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
    var searchNode = function(node,key){
        if(node === null){
            return false;
        }
        if(node.key > key ){
          return  searchNode(node.left,key); //每个都得return 否则最上层获取不到
        }else if(node.key < key){
          return  searchNode(node.right,key);
        }else{
            return true;
        }
    }
    var inOrderTraverseNode = function(node,callback){
        if(node !== null){
            inOrderTraverseNode(node.left,callback);
            callback(node.key);
            inOrderTraverseNode(node.right,callback);
        }
    }
    var insertNode = function(node,newNode){
        //需要明确一点新值肯定有新的节点可以插入,由于二叉树的特殊性,新值不在某个值的左边即在其右边,故新值完全可以在末尾找到插入的地方
        if(newNode.key < node.key){
            if(node.left === null){
                node.left = newNode;
            } else{
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
var tree = new BinarySearchTree();
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
tree.inOrderTraverse(function(value){
    console.log(value);
})
console.log(tree.search(2));
console.log(tree.min());
console.log(tree.max());