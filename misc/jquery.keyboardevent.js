(function ($) {
    $.fn.pressEnter = function (f) {
        return this.each(function () {
            $(this).keypress(function (event) {
                var keycode = (event.keyCode ? event.keyCode : event.which);

                if (keycode == '13') {
                    f.call(this, event);
                }
            })
        })
    }

    $.fn.pressTab = function (f) {
        return this.each(function () {
            $(this).keypress(function (event) {
                var keycode = (event.keyCode ? event.keyCode : event.which);

                if (keycode == '9') {
                    f.call(this, event);
                }
            })
        })
    }

    $.fn.pressBackspace = function (f) {
        return this.each(function () {
            $(this).keypress(function (event) {
                var keycode = (event.keyCode ? event.keyCode : event.which);

                if (keycode == '8') {
                    f.call(this, event);
                }
            })
        })
    }

    $.fn.pressEsc = function (f) {
        return this.each(function () {
            $(this).keypress(function (event) {
                var keycode = (event.keyCode ? event.keyCode : event.which);

                if (keycode == '27') {
                    f.call(this, event);
                }
            })
        })
    }

    $.fn.pressNumeric = function (f) {
        return this.each(function () {
            $(this).keypress(function (event) {
                var keycode = (event.keyCode ? event.keyCode : event.which);

                if (keycode >= '48' && keycode <= '57') {
                    f.call(this, event);
                }
            })
        })
    }

    $.fn.pressLetter = function (f) {
        return this.each(function () {
            $(this).keypress(function (event) {
                var keycode = (event.keyCode ? event.keyCode : event.which);

                if ((keycode >= '65' && keycode <= '90') || (keycode >= '97' && keycode <= '122')) {
                    f.call(this, event);
                }
            })
        })
    }
}(jQuery));
