class Queue{
    data = [];
    enqueue(val){
        return this.data.unshift(val);
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
        return this.data.join(",");
    }
    constructor(...data){
        data.length !== 0 && (this.data = data);
    }
}