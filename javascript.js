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

    } 
}
let list = linkedList();
list.append(2);
list.append(3);
console.log(list);
