let listModule = (function () {
    function indexErrorLog() {
        console.log("Invalid index !");
    }

    class List {
        constructor(list) {
            this.list = list;
        }

        insert(index, element) {
            if(index === -1 || index > this.list.length) {
                indexErrorLog();
                return;
            }

            for(let i = this.list.length; i > index; i--) {
                this.list[i] = this.list[i-1];
            }

            this.list[index] = element;
        }

        add(element) {
            this.list[this.list.length] = element;
        }

        remove(element) {
            let elementFound = false;

            for(let i = 0; i < this.list.length; i++) {
                if(this.list[i] === element && !elementFound) {
                    elementFound = true;
                }

                if(elementFound && i+1 < this.list.length){
                    this.list[i] = this.list[i+1];
                }            
            }

            this.list.length = this.list.length - 1;
        }

        removeAt(index) {
            if(index === -1 || index > this.list.length) {
                indexErrorLog();
                return;
            }

            for(let i = index; i < this.list.length; i++) {
                this.list[i] = this.list[i+1];
            }

            this.list.length = this.list.length - 1;
        }

        clear() {
            linearStructures.clear(this.list);
        }

        reverse() {
            let temp = null;

            for(let i = 0; i < this.list.length / 2; i++) {
                temp = this.list[i];
                this.list[i] = this.list[this.list.length-1-i];
                this.list[this.list.length-1-i] = temp;
            }
        }

        indexOf(element) {
            for(let i = 0; i < this.list.length; i++) {
                if(this.list[i] === element) {
                    return i;
                }
            }

            return -1;
        }

        sort() {
            // TODO: use a sorting algorithm
            this.list.sort();
        }

        contains(element) {
            return linearStructures.contains(this.list, element);
        }

        count() {
            return linearStructures.count(this.list);
        }
    }

    return {
        list: List
    }
})();

let linkedListModule = (function () {
    function makeNode(data) {
        return { key: uidGenerator.generateUid(), data: data, next: null };
    };

    class LinkedList {
        constructor(linkedList) {
            this.head = null;
            this.end = null;
        }

        addFirst(data) {
            if(this.head === null) {
               this.head = makeNode(data);
               this.end = this.head;
            } else {
                let newListItem = makeNode(data);
                newListItem.next = this.head;
                this.head = newListItem;
            }
        }

        addLast(data) {
            if(this.head === null) {
                this.head = makeNode(data);
                this.end = this.head;
            } else {               
                this.end.next = makeNode(data);
                this.end = this.end.next;
            }
        }

        addBefore(key, data) {
            let element = this.head;
            let newListItem = makeNode(data);

            while(element.next.key !== key) {
                element = element.next;
            }

            newListItem.next = element.next;
            element.next = newListItem;
        }

        addAfter(key, data) {
            let element = this.head;
            let newListItem = makeNode(data);

            while(element.key !== key) {
                element = element.next;
            }

            newListItem.next = element.next;
            element.next = newListItem;
        }

        removeFirst() {
            this.head = this.head.next;
        }

        removeLast() {
            let element = this.head;

            while(element.next.key !== this.end.key) {
                element = element.next;
            }

            this.end = element;
            this.end.next = null;
        }

        count() {
            let count = 0;
            let element = this.head;

            while(element !== null) {
                count++;
                element = element.next;
            }

            return count;
        }
    }

    return {
        linkedList: LinkedList
    }
})();

let stackModule = (function () {
    class Stack {
        constructor(stack) {
            this.stack = stack;
            this.top = this.stack.length ? this.stack.length-1: -1;
        }

        push(element) {
            this.stack[this.stack.length] = element;
            this.top++;
        }

        pop() {
            let top = this.stack[this.top];

            this.stack.length = this.stack.length-1;

            if(this.stack.length) {
                this.top--;
            } else {
                this.top = -1;
            }

            return top;
        }

        peek() {
            return linearStructures.peek(this.stack, this.top);
        }

        count() {
            return linearStructures.count(this.stack);
        }

        contains(element) {
            return linearStructures.contains(this.stack, element);
        }

        clear() {
            linearStructures.clear(this.stack);
        }
    }

    return {
        stack: Stack
    }
})();

let queueModule = (function () {
    class Queue {
        constructor(length) {
            this.queue = new Array(length || 1);
            this.front = 0;
            this.rear = 0;
            this.emptyQueue = true;
        }

        enqueue(element) {
            if(this.rear+1 === this.front && !this.emptyQueue) {
                let largerArray = new Array(this.queue.length*2);
                let elemetAt = largerArray.length - (this.queue.length - 1 - this.rear);
                let startPosition = this.front;
                this.front = elemetAt;

                for (let i = 0; i <= this.rear; i++) {
                    largerArray[i] = this.queue[i];
                }

                for (let j = startPosition; j < this.queue.length; j++) {
                    largerArray[elemetAt++] = this.queue[j];
                }

                this.queue = largerArray;
            }

            if(!this.emptyQueue) {
                this.rear++;
            }

            if(this.rear === this.queue.length) {
                if(!this.queue[0]) {
                    this.rear = 0;
                } else {
                    let largerArray = new Array(this.queue.length*2);

                    for (let i = 0; i < this.queue.length; i++) {
                        largerArray[i] = this.queue[i];
                    }
                    this.queue = largerArray;
                }
            }

            this.queue[this.rear] = element;
            this.emptyQueue = false;
        }

        dequeue() {
            if(this.front === this.queue.length) {
                this.front = 0;
            }

            let front = this.queue[this.front];
            this.queue[this.front] = null;            

            if(this.front === this.rear && !this.emptyQueue) {
                this.front = 0;
                this.rear = 0;
                this.emptyQueue = true;
                return front;
            }
            this.front++;

            return front;                                 
        }

        peek() {
            return linearStructures.peek(this.queue, this.front);
        }

        count() {
            return linearStructures.count(this.queue);
        }

        clear() {
            linearStructures.clear(this.queue);
        }

        contains(element) {
            return linearStructures.contains(this.queue, element);
        }
    }

    return {
        queue: Queue
    }
})();


let treeModule = (function () {
    class TreeNode {
        constructor(value, hasParent) {
            this.value = value;
            this.hasParent = hasParent;
            this.children = new Array();
        }

        addChild(child) {
            if(typeof child !== treeNode) {
                return;
            }
            this.children.push(child);
        }
    }

    class Tree {
        constructor(treeRoot) {
            this.root = treeRoot;
        }

        returnRoot(node) {
            return this.root;
        }

        depthFirstSearchStack() {
            let stack = new stackModule.stack([]);
            let node = null;

            stack.push(this.root);

            while(stack.count()) {
                node = stack.pop();
                console.log(node.value);

                if (!node.children.length) {
                  continue;
                }

                for (let i = 0; i < node.children.length; i++) {
                    stack.push(node.children[i]);
                }
            }
        }

        depthFirstSearch(node) {
             console.log(node.value);
             for (let i = 0; i < node.children.length; i++) {
                 this.depthFirstSearch(node.children[i]);
             }
        }

        breadthFirstSearch() {
            let queue = new queueModule.queue(0);
            let node = null;

            queue.enqueue(this.root);

            while(!queue.emptyQueue) {                
                node = queue.dequeue();
                console.log(node.value);

                if (!node.children.length) {
                  continue;
                }

                for (var i = 0; i < node.children.length; i++) {
                    queue.enqueue(node.children[i]);
                }
            }
        }
    }

    return {
        tree: Tree,
        treenode : TreeNode
    }
})();