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
}
}
let list = linkedList();
list.append(2);
list.append(3);
list.prepend(55);
console.log(list);
console.log(list.head.next);
console.log(list.head.next.next);
list.size()
