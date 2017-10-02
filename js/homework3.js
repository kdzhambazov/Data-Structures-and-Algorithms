// 1. You are given a tree of N nodes represented as a set of N-1 pairs of nodes (parent node, child node), each in the range (0..N-1). Example:
// Write a program to read the tree and find:

// a) the root node
// b) all leaf nodes
// c) all middle nodes
// d) the longest path in the tree
// e) (*) all paths in the tree with given sum `S` of their nodes
// f) (*) all subtrees with given sum `S` of their nodes

// let nodes = {};
// let tree = {};
// let dataPairs = [	
// 	{parent: 19, child: 1},
// 	{parent: 19, child: 12},
// 	{parent: 19, child: 31},
// 	{parent: 7, child: 19},
// 	{parent: 7, child: 21},
// 	{parent: 14, child: 23},
// 	{parent: 14, child: 6},
// 	{parent: 7, child: 14}
// ];

// // Build the tree:
// for (let i = 0; i < dataPairs.length; i++) {
// 	if(!nodes[dataPairs[i].parent]) {
// 		nodes[dataPairs[i].parent] = new treeModule.treenode(dataPairs[i].parent);
// 	}

// 	if(nodes[dataPairs[i].child]) {
// 		nodes[dataPairs[i].parent].children.push(nodes[dataPairs[i].child]);
// 		nodes[dataPairs[i].child].hasParent = true;
// 	} else {
// 		nodes[dataPairs[i].parent].children.push(new treeModule.treenode(dataPairs[i].child, true));
// 	}
// }

// // Set the root
// for (property in nodes) {
// 	if(!nodes[property].hasParent) {
// 		nodes[property].hasParent = false;
// 		tree = new treeModule.tree(nodes[property]);
// 		nodes = null;
// 		break;
// 	}
// }
// console.log("DFS");
// tree.depthFirstSearch(tree.root);

// a) the root node====================================================================================================
// console.log(tree.returnRoot());

// b) all leaf nodes====================================================================================================
// function returnLeafs(node) {
// 	for (let i = 0; i < node.children.length; i++) {
// 		returnLeafs(node.children[i]);
// 	}
// 	!node.children.length && console.log(node);
// }

// returnLeafs(tree.root);

// c) all middle nodes====================================================================================================
// function returnMiddleNodes(node) {
// 	for (let i = 0; i < node.children.length; i++) {
// 		returnMiddleNodes(node.children[i]);
// 	}

// 	node.children.length && node.hasParent && console.log(node);
// }

// returnMiddleNodes(tree.root);

// d) the longest path in the tree====================================================================================================

// function returnLongestPath(node) {
// 	if(!node.children.length) { return 0; }

// 	let maxPath = 0;
// 	for (let i = 0; i < node.children.length; i++) {
// 		maxPath = Math.max(maxPath, returnLongestPath(node.children[i]));
// 	}

// 	return maxPath + 1;
// }

// console.log(returnLongestPath(tree.root));

let arr = [4,1,3,5,2];
// let elemBuff = null;
// let j = null;
// for (let i = 0; i < arr.length; i++) {
// 	elemBuff = arr[i];
// 	j = i-1;

// 	while(j >= 0 && elemBuff > arr[j]) {
// 		arr[j+1] = arr[j--];
// 	}
// 	arr[j+1] = elemBuff;
// }
//
let elemBuff = null;
let r = null;
let l = null;
let med = null;

for (let i = 0; i < arr.length; i++) {
	elemBuff = arr[i];
	l = 0;
	r = i-1;

	while(l <= r) {
		med = Math.floor((l + r) / 2);
		if (elemBuff < arr[med]) {
			r = med - 1;
		} else {
			l = med + 1;
		}
	}


	for (let j = i - 1; j >= l; j--) {
		arr[j+1] = arr[j];
	}
	arr[l] = elemBuff;
}