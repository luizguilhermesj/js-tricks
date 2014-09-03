
var foo = function(){
    this.say = function(){
        console.log('say');
    }
}

var bar = function(){
    this.hello = function(){
        console.log('hello');
    }
};

bar.prototype = new foo();

var obj = new bar();
obj.say();
obj.hello();


(function(){
    // closed scope
});































/*
(function(){
    var Context = function(){
        console.log('context', this);
        this.ContextChild = function() {
            console.log('context-child', this);
        };
    };

    var obj = new Context();
    obj.ContextChild();
})();
*/






































/*
(function(){

    var Class = function() {
        this.hello = 'hello';
    }

    Class.prototype.world = function() {
        return 'world';
    }

    var obj = new Class();
    console.log(obj.hello, obj.world());
})();
*/



































/*
(function(){

    var Class = function() {
        this.hello = 'hello';
    }

    Class.prototype.world = function() {
        return 'world';
    }

    Class.prototype.sayHello = function() {
        document.getElementsByTagName('body')[0].innerText = this.hello + ' ' + this.world();
        document.dispatchEvent(new Event('sup'));
    }

    document.addEventListener('click', function(){
        var obj = new Class();
        obj.sayHello();
    });
})();

(function(){

    var Class = function() {
        this.hello = 'hello';
    }

    Class.prototype.world = function() {
        return 'Dafiti';
    }

    Class.prototype.sayHello = function() {
        document.getElementsByTagName('body')[0].innerText = this.hello + ' ' + this.world();
        document.dispatchEvent(new Event('sup'));
    }

    document.addEventListener('click', function(){
        var obj = new Class();
        obj.sayHello();
    });
});
*/

