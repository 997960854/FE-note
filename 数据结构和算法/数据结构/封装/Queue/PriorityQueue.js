class QueueElement{
    constructor(element, priority){
        this.data = element;
        this.priority = priority;
    }
}

class PriorityQueue{
    data = [];
    enqueue(data){
        if(this.data.length == 0){
            return this.data.unshift(data);
        }
        let existId = this.data.findIndex(({priority}) => priority > data.priority);
        if(existId === -1){
            return this.data.push(data);
        }
        this.data.splice(existId, 0, data);
        return this.size();
    }
    dequeue(){
        return this.data.pop();
    }
    front(){
        return this.data[this.data.length - 1];
    }
    isEmpty(){
        return this.data.length === 0;
    }
    size(){
        return this.data.length;
    }
    toString(){
        let str = "";
        if(this.data.length !== 0){
            str = this.data.map(({data, priority}) => `${data}, ${priority}`).join(" ");
        }
        return str;
    }
    constructor(data){
        if(data && data.length !== 0){
            let existId = this.data.findIndex(({priority}) => priority > data.priority);
            if(existId === -1){
                this.data.push(data);
            }
            this.data.splice(existId, 0, data);
        }
    }
}