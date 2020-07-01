export class BinaryHeap<T> {

    values: T[] = [];
    size: number;

    private static childrenCount = 2;

    constructor(size: number = 1024) {
        this.size = size;
    }

    isFull() : boolean{
        return this.values.length === this.size;
    }

    parentIndex(i: number) : number{
        return Math.floor(i / BinaryHeap.childrenCount) + 1;
    }

    parent(i: number) : T{
        return this.values[this.parentIndex(i)];
    }

    kthChildrenIndex(i: number , k: number) : number{
        return  i * BinaryHeap.childrenCount + k;
    }

    kthChildren(i: number, k: number) : T{
        return this.values[this.kthChildrenIndex(i,k)];
    }

    left(i: number) : T{
       return this.kthChildren(i,1);
    }

    right(i: number) : T{
        return this.kthChildren(i,2);
    }

    maxChildIndex(i: number) : number{
        return this.left(i) >= this.right(i) ? this.kthChildrenIndex(i, 1) : this.kthChildrenIndex(i, 2);
    }

    add(element:T) : void{
        if(!element) throw new Error("the argument of add is " + element);
        if(this.isFull()) throw new Error("the heap is full");

        this.values.push(element);
        this.heapifyUp(this.values.length - 1);
    }

    heapifyUp(i:number) :void{
        let element = this.values[i];
        let parentIndex, parent;
        while(i>0){
            parentIndex = this.parentIndex(i);
            parent = this.values[parentIndex];
            if(element > parent){
                this.values[i] = parent;
                i = parentIndex;
            }else{
                break;
            }
        }

        this.values[i] = element;
    }

    remove(i: number): T{
        let lastIndex = this.values.length - 1;
        if(i > lastIndex) throw new Error(i + ' is out of range:' + lastIndex);
        let element = this.values[i];
        if( i !== lastIndex){
            let _element = this.values.splice(i,1);
            this.values[i] = _element[0] ;
            this.heapifyDown(i);
        }else{
            this.values.splice(i,1);
        }

        return element;
    }

    heapifyDown(i: number){
        let maxChildIndex, maxChild;
        let element = this.values[i];
        while (i < this.values.length){
            maxChildIndex = this.maxChildIndex(i);
            maxChild = this.values[maxChildIndex];
            if(maxChild > element){
                this.values[i] = maxChild;
                i = maxChildIndex;
            }else{
                break;
            }
        }
        this.values[i] = element;
    }

}