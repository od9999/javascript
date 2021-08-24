function Node(data, left, right) {
	this.data = data;
	this.left = left;
	this.right = right;
}
Node.prototype.show = function () {
	return this.data;
};

function BST() {
	this.root = null;
}

//插入方法
BST.prototype.insert = function (data) {
	var n = new Node(data, null, null);
	if (this.root == null) {
		this.root = n;
	} else {
		var current = this.root;
		var parent;
		while (true) {
			parent = current;
			if (data < current.data) {
				current = current.left;
				if (current == null) {
					parent.left = n;
					break;
				}
			} else {
				current = current.right;
				if (current == null) {
					parent.right = n;
					break;
				}
			}
		}
	}
};

//调用两次递归遍历二叉树
BST.prototype.preOrder = function () {
	this._preOrder(this.root);
};
BST.prototype._preOrder = function (node) {
	if (!(node == null)) {
		console.log(node.show());
		this._preOrder(node.left);
		this._preOrder(node.right);
	}
};

//调用两次递归遍历二叉树
BST.prototype.inOrder = function () {
	this._inOrder(this.root);
};
BST.prototype._inOrder = function (node) {
	if (!(node == null)) {
		this._inOrder(node.left);
		console.log(node.show());
		this._inOrder(node.right);
	}
};

//调用两次递归遍历二叉树
BST.prototype.postOrder = function () {
	this._postOrder(this.root);
};
BST.prototype._postOrder = function (node) {
	if (!(node == null)) {
		this._postOrder(node.left);
		this._postOrder(node.right);
		console.log(node.show());
	}
};

BST.prototype.depth = function () {
	return this._depth(this.root);
};
BST.prototype._depth = function (node) {
	if(null === node) {
		return 0;
	} else {
		let leftDepth = this._depth(node.left);
		let rightDepth = this._depth(node.right);
		return leftDepth > rightDepth ? leftDepth + 1 : rightDepth + 1;
	}
};


let tree = new BST();
tree.insert(23);
tree.insert(45);
tree.insert(16);
tree.insert(37);
tree.insert(3);
tree.insert(99);
tree.insert(22);


console.log('depth--------');
console.log(tree.depth());

console.log('inOrder--------');
tree.inOrder();
console.log('preOrder--------');
tree.preOrder();
console.log('postOrder--------');
tree.postOrder();

