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
        
        images.fancybox({
            openEffect: 'none',
            closeEffect: 'none',
            fitToView       : true,
            autoSize        : true,
            afterClose: function() {
                images.show();
            },
            helpers : {
                overlay : {
                    css : {
                        'background' : 'transparent'
                    }
                }
            }
        });
    };
})();

