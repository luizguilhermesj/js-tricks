window.dft = {};


// Módulos sempre são stricts, auto invocáveis e expostos via jQuery Plugin
(function(){

    'use strict';

    //self called
    //$.fn.module = ...
})();







































(function($){

    'use strict';

    var Say = function(element) {
        this.$element = $(element);
        this.hello = 'hello';
        console.log("SAY CONSTRUIDO");


        $(document).one('click', '.say-hello', $.proxy(this, 'sayHello'));
    };

    Say.prototype.getWorld = function() {
        return 'world';
    };

    Say.prototype.sayHello = function () {
        this.$element.html(this.hello + ' ' + this.getWorld());
    };


    $.fn.say = function() {
      return this.each(function() {
        var $this   = $(this);
        var data    = $this.data('dft.say');

        if (!data) $this.data('dft.say', (data = new Say(this)));
      });
    };

    $(document).on('click', '.say-hello', function(){
        $('.sayer').say();
    });

})(jQuery);






















(function($){

    'use strict';

    var Say2 = function(element, options) {
        this.$element = $(element);
        this.options = options;

        this.hello = 'hello';
        console.log("SAY 2 CONSTRUIDO");
    };

    Say2.DEFAULTS = {
      prefix: 'Load event -->>>>'
    };

    Say2.prototype.getWorld = function() {
        return 'world';
    };

    Say2.prototype.sayHello = function () {
        this.$element.html(this.options.prefix + ' ' + this.hello + ' ' + this.getWorld());
    };

    Say2.prototype.say = function(text) {
        this.$element.html(this.options.prefix + ' ' + text);
    };


    $.fn.say2 = function(option, args) {
      return this.each(function() {
        var $this   = $(this);
        var data    = $this.data('dft.say2');
        var options = $.extend(
          {},
          Say2.DEFAULTS,
          $this.data(),
          typeof option == 'object' && option
        );

        if (!data) $this.data('dft.say2', (data = new Say2(this, options)));
        if (typeof option == 'string') data[option](args);
        else if (options.show) data.open();
      });
    };

    $(document).on('dft.say2.load', function(){
        $('.sayer').say2('sayHello');
    });

})(jQuery);









(function($) {

    'use strict';

    var SpeakerAction = function() {};

    SpeakerAction.prototype.run = function() {
      this.initSay2();
    };

    SpeakerAction.prototype.initSay2 = function() {
      $(document).trigger('dft.say2.load');
    };

    $(document).ready(function(){
      if ($('body').data('route') == 'speaker') {
        (new SpeakerAction()).run();
      }
    });

    window.dft.SpeakerAction = new SpeakerAction();

})(jQuery);
