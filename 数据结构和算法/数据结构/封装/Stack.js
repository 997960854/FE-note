class Stack{
    data = [];
    push(val){
        return this.data.push(val);
    }
    pop(){
        return this.data.pop();
    }
    peek(){
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