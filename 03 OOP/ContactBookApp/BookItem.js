var BookItem = (function() {

    var nextId = 0;
    
    function BookItem() {
        this.id = ++nextId;
    }

    //
    //  Abstract
    //
    BookItem.prototype.dump = function() {
        throw new Error("Abstract method call");
    }
    
    return BookItem;
})();
