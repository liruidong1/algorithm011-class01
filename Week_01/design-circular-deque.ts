class MyCircularDeque {

    arr: number[];
    length: number;

    constructor(k: number) {
        this.arr = [];
        this.length = k;
    }

    insertFront(value: number): boolean {
        if(this.arr.length < this.length){
            this.arr.unshift(value);
            return true;
        }else{
            return false;
        }
    }


    insertLast(value: number): boolean {
        if(this.arr.length < this.length){
            this.arr.push(value);
            return true;
        }else{
            return false;
        }
    }

    deleteFront(): boolean {
        if(this.arr.length > 0){
            this.arr.shift();
            return true;
        }else {
            return false;
        }
    }

    deleteLast(): boolean {
        if(this.arr.length > 0){
            this.arr.pop();
            return true;
        }else {
            return false;
        }
    }

    getFront(): number {
        if(this.arr.length > 0){
            return this.arr[0];
        }else {
            return -1;
        }
    }

    getRear(): number {
        if(this.arr.length > 0){
            return this.arr[this.arr.length - 1];
        }else {
            return -1;
        }
    }

    isEmpty(): boolean {
        return !this.arr.length;
    }

    isFull(): boolean {
        return this.arr.length === this.length;
    }
}