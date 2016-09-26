; (function ($, window, document, undefined) {
    $.listshuttle = function (source, target, options) {
        var settings = $.extend({
            'add': null,
            'addall': null,
            'remove': null,
            'removeall': null,
            'movetop': null,
            'moveup': null,
            'movedown': null,
            'movebottom': null,
            'doubleclick': true,
            'listshuttle': function () { }
        }, options)

        function move(from, to) {
            return $(':selected', $(from)).detach().appendTo($(to));
        }

        function moveall(from, to) {
            return $(from).children().detach().appendTo($(to));
        }

        function movetop(to) {
            $(to).children(':selected').each(function () {
                if ($(this).index() != 0) {
                    $(this).insertBefore($(to).children(':first-child'));
                }
            });
        }

        function moveup(to) {
            $(to).children(':selected').each(function () {
                if ($(this).index() != 0) {
                    $(this).insertBefore($(to).children()[$(this).index() - 1]);
                }
            });
        }

        function movedown(to) {
            $(to).children(':selected').each(function () {
                if ($(this).index() < $(to).children().length) {
                    $(this).insertAfter($(to).children()[$(this).index() + 1]);
                }
            });
        }

        function movebottom(to) {
            $(to).children(':selected').each(function () {
                if ($(this).index() < $(to).children().length) {
                    $(this).insertAfter($(to).children(':last-child'));
                }
            });
        }

        if (settings['doubleclick']) {
            $(document).delegate(source, 'dblclick.listshuttle',
               function () {
                   var elements;

                   move(source, target);

                   settings['listshuttle'].call($, elements, 'add');
               }
           );

            $(document).delegate(target, 'dblclick.listshuttle',
               function () {
                   var elements;

                   move(target, source);

                   settings['listshuttle'].call($, elements, 'remove');
               }
           );
        }

        if (settings['add']) {
            $(document).delegate(settings['add'], 'click.listshuttle',
               function () {
                   var elements = move(source, target);

                   settings['listshuttle'].call($, elements, 'add');
               }
           );
        }

        if (settings['remove']) {
            $(document).delegate(settings['remove'], 'click.listshuttle',
               function () {
                   var elements = move(target, source);

                   settings['listshuttle'].call($, elements, 'remove');
               }
           );
        }

        if (settings['addall']) {
            $(document).delegate(settings['addall'], 'click.listshuttle',
               function () {
                   var elements = moveall(source, target);

                   settings['listshuttle'].call($, elements, 'add');
               }
           );
        }

        if (settings['removeall']) {
            $(document).delegate(settings['removeall'], 'click.listshuttle',
               function () {
                   var elements = moveall(target, source);

                   settings['listshuttle'].call($, elements, 'remove');
               }
           );
        }

        if (settings['movetop']) {
            $(document).delegate(settings['movetop'], 'click.listshuttle',
               function () {
                   var elements = movetop(target);

                   settings['listshuttle'].call($, elements, 'movetop');
               }
           );
        }

        if (settings['moveup']) {
            $(document).delegate(settings['moveup'], 'click.listshuttle',
               function () {
                   var elements = moveup(target);

                   settings['listshuttle'].call($, elements, 'moveup');
               }
           );
        }

        if (settings['movedown']) {
            $(document).delegate(settings['movedown'], 'click.listshuttle',
               function () {
                   var elements = movedown(target);

                   settings['listshuttle'].call($, elements, 'movedown');
               }
           );
        }

        if (settings['movebottom']) {
            $(document).delegate(settings['movebottom'], 'click.listshuttle',
               function () {
                   var elements = movebottom(target);

                   settings['listshuttle'].call($, elements, 'movebottom');
               }
           );
        }

        return this;
    };
})(jQuery, window, document);
 
