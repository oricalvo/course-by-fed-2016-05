var Group = (function() {

    function Group(name) {
        BookItem.call(this);
        
        this.name = name;
        this.items = [];
    }

    Group.prototype = Object.create(BookItem.prototype);

    Group.prototype.addItem = function(item) {
        this.items.push(item);
    }

    Group.prototype.dump = function() {
        console.log(this.name);

        this.items.forEach(function(item) {
            if(item instanceof Group) {
                item.dump();
            }
        });

        this.items.forEach(function(item) {
            if(item instanceof Contact) {
                item.dump();
            }
        });
    }

    return Group;
})();
