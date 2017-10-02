// 1. Write a program that reads from the console a sequence of positive integer numbers.
	// 	The sequence ends when empty line is entered.
	// 	Calculate and print the sum and average of the elements of the sequence.
	// 	Keep the sequence in List<int>.

// let list = new listModule.list([1,2,3,4,5,6,7,8,9]);
// let sum = 0;

// for (let i = 0; i < list.count(); i++) {
// 	sum += list.list[i];
// }

// console.log("sum: " + sum + ", average: " + sum / list.count());

// ===========================================================================================================

// 2. Write a program that reads N integers from the console and reverses them using a stack.
	// Use the Stack<int> class.

// let stack = new stackModule.stack([1,2,3,4,5,6,7,8,9,10,11]);
// let stackCount = stack.count();

// for (let j = 0; j < stackCount; j++) {
// 	console.log(stack.pop());
// }

// ===========================================================================================================

// 3. Write a program that reads a sequence of integers (List<int>) ending with an empty line and sorts them in an increasing order.

// let list = new listModule.list([3,5,1,4,2]);

// list.sort();
// console.log(list.list);

// ===========================================================================================================

// 4. Write a method that finds the longest subsequence of equal numbers in given List and returns the result as new List<int>.
	// Write a program to test whether the method works correctly.

// let list = new listModule.list([1,2,2,3,4,4,4,5,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,9]);
// let bufferObj = { longestSequenceElement: 0 };
// let longestSequenceElement = 0;
// let currentCount = 0;

// for (let j = 0; j < list.count(); j++) {
// 	if(list.list[j] === list.list[j+1] || list.list[j] === list.list[j-1]) {
// 		if(!bufferObj.hasOwnProperty(list.list[j])) {
// 			bufferObj[list.list[j]] = new listModule.list([]);
// 		}

// 		bufferObj[list.list[j]].add(list.list[j]);
// 		currentCount++;

// 		if((list.list[j] !== list.list[j+1] && list.list[j] === list.list[j-1]) && longestSequenceElement < currentCount) {
// 			longestSequenceElement = currentCount;
// 			currentCount = 0;
// 			bufferObj.longestSequenceElement = list.list[j];
// 		}
// 	}
// }
// console.log(bufferObj[bufferObj.longestSequenceElement].list);

// ===========================================================================================================

// 5. Write a program that removes from given sequence all negative numbers.

// let list = new listModule.list([1,2,-2,3,-4,4,-4,5,-6,6,7,7,-7,7,7,-7,-7,-7,-7,-7,-7,7,-7,7,7,-8,8,8,-9]);

// for (let j = 0; j < list.count(); j++) {
// 	if(list.list[j] < 0) {
// 		list.remove(list.list[j]);
// 		j--;
// 	}
// }
// console.log(list.list);

// ===========================================================================================================

// 6. Write a program that removes from given sequence all numbers that occur odd number of times.

// let list = new listModule.list([4, 2, 2, 5, 2, 3, 2, 3, 1, 5, 2]);
// let bufferObj = {};

// for (let j = 0; j < list.count(); j++) {
// 	if(!bufferObj.hasOwnProperty(list.list[j])) {
// 		bufferObj[list.list[j]] = 0;
// 	}
// 	bufferObj[list.list[j]]++;
// }


// for (property in bufferObj) {
// 	if(bufferObj[property] % 2 === 0) {
// 		let count = 0;
// 		while(count < bufferObj[property]) {
// 			list.remove(parseInt(property));
// 			count++;
// 		}		
// 	}
// }

// console.log(list.list);

// ===========================================================================================================

// 7. Write a program that finds in given array of integers (all belonging to the range [0..1000]) how many times each of them occurs.

// let list = new listModule.list([4, 2, 2, 5, 2, 3, 2, 3, 1, 5, 2]);
// let bufferObj = {};

// for (let j = 0; j < list.count(); j++) {
// 	if(!bufferObj.hasOwnProperty(list.list[j])) {
// 		bufferObj[list.list[j]] = 0;
// 	}
// 	bufferObj[list.list[j]]++; 
// }

// console.log(bufferObj);

// ===========================================================================================================

// 8. *The majorant of an array of size N is a value that occurs in it at least N/2 + 1 times.
	// Write a program to find the majorant of given array (if exists).
	// Example:
	// {2, 2, 3, 3, 2, 3, 4, 3, 3} → 3

// ===========================================================================================================

// 9. We are given the following sequence:
	// S1 = N;
	// S2 = S1 + 1;
	// S3 = 2*S1 + 1;
	// S4 = S1 + 2;
	// S5 = S2 + 1;
	// S6 = 2*S2 + 1;
	// S7 = S2 + 2;
	// ...
	// Using the Queue<T> class write a program to print its first 50 members for given N.
	// Example: N=2 → 2, 3, 5, 4, 4, 7, 5, 6, 11, 7, 5, 9, 6, ...

// function calculateElementExpression(currentElement, expression) {
// 	queue.enqueue(expression);
// 	counter.count++;
// 	console.log(expression);
// 	if(counter.count > maxCount) {
// 		return true;
// 	}

// 	return false;
// }

// let inputElement = 2;
// let counter = { count: 1 };
// let maxCount = 50;
// let queue = new queueModule.queue(0);
// queue.enqueue(inputElement);
// console.log(inputElement);

// while(counter.count <= maxCount) {
// 	let currentElement = queue.dequeue();

// 	// S2 = S1 + 1;
// 	if(calculateElementExpression(currentElement, currentElement + 1)) {
// 		break;
// 	}
	
// 	// S3 = 2*S1 + 1;
// 	if(calculateElementExpression(currentElement, (2*currentElement) + 1)) {
// 		break;
// 	}

// 	// S4 = S1 + 2;
// 	if(calculateElementExpression(currentElement, currentElement + 2)) {
// 		break;
// 	}
// }

// ===========================================================================================================

// 14. (*) We are given a labyrinth of size N x N...
	// Some of its cells are empty (0) and some are full (x).
	// We can move from an empty cell to another empty cell if they share common wall.
	// Given a starting position (*) calculate and fill in the array the minimal distance from this position to any other cell in the array. Use "u" for all unreachable cells.

// function checkAndSetLabyrinthCell(row, col, elementIncrement) {
// 	if(row < 0 || col < 0 || row >= labyrinth.length || col >= labyrinth[row].length) {
// 		return false;
// 	} else if(labyrinth[row][col] === "0") {
// 		labyrinth[row][col] = elementIncrement.toString();
// 		return true;
// 	}

// 	return false;
// }

// let labyrinth = [
// 	["0","0","0","x","0","x"],
// 	["0","x","0","x","0","x"],
// 	["0","*","x","0","x","0"],
// 	["0","x","0","0","0","0"],
// 	["0","0","0","x","x","0"],
// 	["0","0","0","x","0","x"]
// ];
// let elementIncrement = 1;
// let list = new listModule.list([]);
// list.add({row: 2, col: 1});

// while(list.count()) {
// 	let nextLabirynthPositions = new listModule.list([]);	
// 	for (var i = 0; i < list.count(); i++) {
// 		// move up
// 		if(checkAndSetLabyrinthCell(list.list[i].row-1, list.list[i].col, elementIncrement)) {
// 			nextLabirynthPositions.add({row: list.list[i].row-1, col: list.list[i].col});

// 		}
// 		// move right
// 		if(checkAndSetLabyrinthCell(list.list[i].row, list.list[i].col+1, elementIncrement)) {
// 			nextLabirynthPositions.add({row: list.list[i].row, col: list.list[i].col+1});
// 		}
// 		// move down
// 		if(checkAndSetLabyrinthCell(list.list[i].row+1, list.list[i].col, elementIncrement)) {
// 			nextLabirynthPositions.add({row: list.list[i].row+1, col: list.list[i].col});
// 		}
// 		// move left
// 		if(checkAndSetLabyrinthCell(list.list[i].row, list.list[i].col-1, elementIncrement)) {
// 			nextLabirynthPositions.add({row: list.list[i].row, col: list.list[i].col-1});
// 		}		
// 	}

// 	elementIncrement++;

// 	if(nextLabirynthPositions.count()) {
// 		list = nextLabirynthPositions;
// 	} else {
// 		list.clear();
// 	}
// }

// console.table(labyrinth);

// ===========================================================================================================