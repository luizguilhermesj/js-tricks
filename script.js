(function(d, w){
    console.log(d);
    console.log(w);
    d.innerText = w.location.href;
})(document, window);


(function(){

    function Class() {
        this.hello = 'hello';
    }

    Class.prototype.world = function() {
        return 'world';
    }

    Class.prototype.sayHello = function () {
        document.getElementsByTagName('body')[0].innerText = this.hello + ' ' + this.world();
        document.dispatchEvent(new Event('sup.pure'));
    }

    document.addEventListener('click', function(){
        var obj = new Class();
        obj.sayHello();
    });
})();


(function(){
    document.addEventListener('sup.pure', function(){
        document.body.style.backgroundColor = 'yellow';
        document.body.style.color = 'black';
    });
})();


function Scope(){
    alert(this);
}

Scope();
new Scope();
