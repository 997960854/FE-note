class Node{
    constructor(data){
        data ? this.data = data : this.data = undefined;
        this.prev = null;
        this.next = null;
    }
}

class DoubleLinkedList{
    append(data){
        if(this.length === 0){
            this.head = this.tail = new Node(data);
        }else{
            let newNode = new Node(data);
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return true;
    }
    insert(data, position){
        if(this.length === 0){
            return false;
        }
        if(position < 0 || position > this.length - 1){
            return false;
        }
        let newNode = new Node(data);
        if(position === 0){
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }else{
            for(let i = 1, nowNode = this.head.next; i < this.length; i++, nowNode = nowNode.next){
                if(i === position){
                    newNode.next = nowNode.prev.next;
                    newNode.prev = nowNode.prev;
                    nowNode.prev.next = newNode;
                    nowNode.prev = newNode;
                    break;
                }
            }
        }
        this.length++;
        return true;
    }
    get(position){
        if(this.length === 0){
            throw "链表为空";
        }if(position < 0 || position > this.length - 1){
            throw "查询位置出错";
        }
        for(let i =0, nowNode = this.head; i < this.length; i++, nowNode = nowNode.next){
            if(i === position){
                return nowNode.data;
            }
        }
    }
    indexOf(data){
        if(this.length === 0){
            return -1;
        }
        for(let i = 0, nowNode = this.head; i < this.length; i++, nowNode = nowNode.next){
            if(nowNode.data === data){
                return i;
            }
        }
        return -1;
    }
    update(data, position){
        if(this.length === 0){
            return false;
        }
        if(position < 0 || position > this.length - 1){
            return false;
        }
        for(let i = 0, nowNode = this.head; i < this.length; i++, nowNode = nowNode.next){
            if(i === position){
                nowNode.data = data;
                return true;
            }
        }
    }
    removeAt(position){
        if(this.length === 0){
            return false;
        }
        if(position < 0 || position > this.length - 1){
            return false;
        }
        if(this.length === 1){
            this.head = this.tail = null;
        }else{
            if(position === 0){
                this.head = this.head.next;
                this.head.prev.next = this.head.prev = null;
            }else{
                for(let i = 1, nowNode = this.head.next; i < this.length; i++, nowNode = nowNode.next){
                    if(i === position){
                        nowNode.prev.next = nowNode.next;
                        nowNode.next.prev = nowNode.prev;
                        nowNode.next = nowNode.prev = null;
                        break;
                    }
                }
            }
        }
        this.length--;
        return true;
    }
    remove(data){
        if(this.length === 0){
            return false;
        }
        if(this.head.data === data){
            this.head = this.head.next;
            this.length--;
            return true;
        }
        for(let nowNode = this.head.next; nowNode !== null; nowNode = nowNode.next){
            if(nowNode.data === data){
                nowNode.prev.next = nowNode.next;
                nowNode.next.prev = nowNode.prev;
                nowNode.next = nowNode.prev = null;
                this.length--;
                return true;
            }
        }
        return false;
    }
    isEmpty(){
        return this.length === 0;
    }
    size(){
        return this.length;
    }
    forwardToString(){
        if(this.length === 0){
            return "";
        }
        let print = [];
        for(let nowNode = this.head; nowNode !== null; nowNode = nowNode.next){
            print.push(nowNode.data);
        }
        return print.join(", ");
    }
    backwordToString(){
        if(this.length === 0){
            return "";
        }
        let print = [];
        for(let nowNode = this.tail; nowNode !== null; nowNode = nowNode.prev){
            print.push(nowNode.data);
        }
        return print.join(", ");
    }
    constructor(){
        this.head = this.tail = null;
        this.length = 0;
    }
}