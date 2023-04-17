function createNode(nodeValue,nextNode) {
if (nodeValue === undefined) {
    nodeValue = null;
}
if (nextNode === undefined) {
    nextNode = null;
}
    return{
        value: nodeValue,
        next: nextNode,
    }
};

function linkedList() {
        return{
      head:null,
    append(value){
        let newNode = createNode(value)
      if(this.head == null){
          this.head = newNode;
      }else{
          let tail = this.head;
          while(tail.next != null){
              tail = tail.next
          }
          tail.next = newNode;
      }
    },
    prepend(value){
let newNode = createNode(value,this.head);
this.head = newNode;
    }, 
    size(){
        let sizeNum =0;
        if(this.head == null){
            return sizeNum;
        } else{
            sizeNum =1;
            let tail = this.head;
          while(tail.next != null){
              sizeNum+=1;
              tail = tail.next;
        }
        console.log("the list is " + sizeNum + " long");
        }
    },
    getHead(){
        if(this.head == null){
            console.log("The List is empty")
            return null
        } else{
            console.log(this.head)
            return this.head
        }
    },
    getTail(){
         if(this.head == null){
             let tail = null;
      }else{
          let tail = this.head;
          while(tail.next != null){
              tail = tail.next
          }
          console.log(tail);
          return tail;
      }
    },
    at(index){
        if(index ==0){
            return this.head;
        } else {
            let current = this.head;
            for(let i=0; i<index; i++){
                current = current.next;
            }
            console.log(current);
            return current;
        }
    },
    pop(){
        let tail = list.getTail();
        let current = this.head;
        while(current.next != tail){
            current = current.next;
        }
        current.next = null;
    },
    contains(value){
        let valueStat;
         let current = this.head;
          while(current.next != null){
              if(current.value == value){
                  valueStat = true;
              }
              current = current.next;
          }
          console.log(valueStat);
          return valueStat;
    },
    toString(){
        let string ="The string is "
        let current = this.head;
        function iterate(current){
          if(current != null){
              string += current.value + " -> ";
              iterate(current.next)
          }
        }
        iterate(current);
          console.log(string + null);
          return string + null;
    }
}
}
let list = linkedList();
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.prepend(55);
console.log(list);
console.log(list.head.next);
console.log(list.head.next.next);
list.size();
list.getHead();
list.getTail();
list.at(1);
list.pop();
list.contains(3);
list.toString();
