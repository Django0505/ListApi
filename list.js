var ListItem = function(data, tail) {
    this.tail = tail;
    this.data = data;
};

// List implementation
var List = function() {
    this.item = null;
    // Add a data item to the front of the list
    this.add = function(elem) {
        this.item = new ListItem(elem, this.item);
    };
    // Returns true if the list is empty
    this.empty = function() {
        return this.item === null;
    };
    // Returns the data at the head of the list. If
    // the list is empty, return null. This leaves
    // the list unmodified
    this.head = function() {
        // ......
        if (!this.item) {
            return null;
        }
        return this.item.data;
    };
    // Remove item off the head of the list and return
    // its value. The new head of the list must be the
    // next element in the list if it exists. If the
    // list is empty, we return null
    this.pop = function() {
        // ......

        if (this.item) {
            var cache = this.item.data;
            this.item = this.item.tail;
            return cache;
        } else {
            return null;
        }
    };
    // Return the number of elements in the list.
    this.length = function() {
        // ......
        var temp = this.item;
        var sum = 0;

        while (temp !== null) {
            temp = temp.tail;
            sum += 1;

        }
        return sum;
    };
    // Return the last data item in the list if it exists. If
    // not, return null
    this.last = function() {
        // ......
       
        if (this.empty()){
        	return null
        }else{
            var temp = this.item.tail;
            while (temp.tail) {
           return temp = temp.tail.data;
        } 
    }

    };
};