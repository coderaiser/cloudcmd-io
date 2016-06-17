(function() {
    'use strict';
    
    window.addEventListener('load', function load() {
        window.removeEventListener('load', load);
        style();
        fancy();
    });
    
    function style() {
        var el = document.createElement('style');
        el.innerHTML = selector() + '{ cursor: pointer }';
        document.head.appendChild(el);
    }
    
    function selector() {
        var dir = '/img/screen/';
        return 'img[src^="' + dir + '"]';
    }
    
    function fancy() {
        var images = $(selector());
        
        var options = {
            openEffect: 'none',
            closeEffect: 'none',
            fitToView: true,
            autoSize: false,
            padding         : 0,
            helpers: {
                overlay : {
                    css : {
                        'background' : 'transparent'
                    }
                }
            }
        };
        
        images.click(function(event) {
            var target = event.target;
            var href = target.src;
            var title = target.alt;
            
            $.fancybox({
                href: href,
                title: title
            }, options);
        });
    };
})();

