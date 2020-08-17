class Node{
    constructor(data){
        data ? (this.data = data) : this.data = undefined;
        this.next = null;
    }
}

class LinkedList{
    append(data){
        let newNode = new Node(data);
        if(this.head === null){
            this.head = newNode;
        }else{
            let endNode = this.head;
            while(endNode.next !== null){
                endNode = endNode.next;
            }
            endNode.next = newNode;
        }
        this.length++;
        return true;
    }
    insert(data, position){
        if(this.length === 0){
            return false;
        }
        if(position < 0 || position > this.length - 1){
        }
        let newNode = new Node(data);
        if(position === 0){
            newNode.next = this.head;
            this.head = newNode;
        }else{
            for(let id = 1, nowNode = this.head.next; id < this.length; id++, nowNode = nowNode.next){
                if(id === (position - 1)){
                    newNode.next = nowNode.next;
                    nowNode.next = newNode;
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
        if(position === 0){
            this.head = this.head.next;
        }else{
            for(let i = 1, nowNode = this.head.next; i < this.length; i++, nowNode = nowNode.next){
                if(i === position - 1){
                    nowNode.next = nowNode.next.next;
                    break;
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
        for(let nowNode = this.head; nowNode.next !== null; nowNode = nowNode.next){
            if(nowNode.next.data === data){
                nowNode.next = nowNode.next.next;
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
    toString(){
        if(this.length === 0){
            return "";
        }
        let print = [];
        for(let nowNode = this.head; nowNode !== null; nowNode = nowNode.next){
            print.push(nowNode.data);
        }
        return print.join(", ");
    }
    constructor(){
        this.head = null;
        this.length = 0;
    }
}