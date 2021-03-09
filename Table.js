class Table{
    constructor(arr) {
        this.header = arr[0];
        arr.shift()
        arr.pop();
        this.rows = arr;
    }

    get RowCount(){
        return this.rows.length;
    }
    get Column(){
        return this.header.length;
    }
}

module.exports = Table;