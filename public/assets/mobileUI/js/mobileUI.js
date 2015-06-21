(function(){

    // --------------------------------------
    //    Load MobileUI template and files
    // --------------------------------------

    function loadjscssfile(filename, filetype){
        //if filename is an external CSS file
        if (filetype == "css"){
            var fileref = document.createElement("link");
            fileref.setAttribute("rel", "stylesheet");
            fileref.setAttribute("type", "text/css");
            fileref.setAttribute("href", filename);
        }if (typeof fileref != "undefined"){
            document.getElementsByTagName("head")[0].appendChild(fileref);
        }
    };
 
    loadjscssfile("assets/mobileUI/css/mobileUI.css", "css");

    $('body').append("<script src='assets/mobileUI/js/knobKnob.jquery.js'></script>");
    $('body').append("<script src='assets/mobileUI/js/transform.js'></script>");

    var mobileUITpl = '<div id="ui-wrapper">\
        <section class="section-1">\
            <div id="btn-click-1"></div>\
            <input type="checkbox" name="checkbox-1" id="checkbox-1" value="">\
            <input type="checkbox" name="checkbox-2" id="checkbox-2" value="">\
            <div id="btn-click-2"></div>\
            <div id="btn-click-3"></div>\
            <input type="checkbox" name="checkbox-3" id="checkbox-3" value="">\
            <input type="checkbox" name="checkbox-4" id="checkbox-4" value="">\
            <div id="btn-click-4"></div>\
            <div id="btn-click-5"></div>\
            <input type="checkbox" name="checkbox-5" id="checkbox-5" value="">\
            <input type="checkbox" name="checkbox-6" id="checkbox-6" value="">\
            <div id="btn-click-6"></div>\
        </section>\
        <section class="section-2">\
            <div class="slider-container">\
                <input type="range" name="slider-1" id="slider-1" min="1000" max="10000" step="1" value="10000">\
                <div class="slider-1-value">0</div>\
            </div>\
            <div class="slider-container">\
                <input type="range" name="slider-2" id="slider-2" min="0" max="10000" step="1" value="0">\
                <div class="slider-2-value">0</div>\
            </div>\
            <div class="slider-container">\
                <input type="range" name="slider-3" id="slider-3" min="0" max="100" step="1" value="50">\
                <div class="slider-3-value">0</div>\
            </div>\
            <div class="slider-container">\
                <input type="range" name="slider-4" id="slider-4" min="0" max="100" step="1" value="50">\
                <div class="slider-4-value">0</div>\
            </div>\
            <div class="slider-container">\
                <input type="range" name="slider-5" id="slider-5" min="0" max="100" step="1" value="50">\
                <div class="slider-5-value">0</div>\
            </div> \
            <div class="slider-container">\
                <input type="range" name="slider-6" id="slider-6" min="0" max="100" step="1" value="50">\
                <div class="slider-6-value">0</div>\
            </div>\
        </section>\
        <section class="section-3">\
            <div id="container-knob">\
                <p class="slider-7-value-p">\
                    Volume : <span class="slider-7-value">0</span>\
                </p>\
                <div id="control-knob"></div>\
                <input type="range" id="slider-7" min="0" max="100" step="1" value="25" />\
            </div>\
            <div id="container-player-control">\
                <div id="player-play"></div>\
                <div id="player-pause"></div>\
                <div id="player-previous"></div>\
                <div id="player-next"></div>\
                <div id="player-stop"></div>\
            </div>\
        </section>\
    </div>';

    $('body').append(mobileUITpl);

    // --------------------------------------
    //     Enable Touch Event for the UI
    // --------------------------------------

    $(window).on("touchstart", function(ev) {
        var e = ev.originalEvent;
        console.log(e.touches);
    });

    // --------------------------------------
    //          Device detection
    // --------------------------------------

    // if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    //     $("#ui-wrapper").css('display', 'inline-block');
    // };

    // --------------------------------------
    //              Socket.io
    // --------------------------------------

    // localhost
    // var socket = io.connect('http://localhost:8888');

    // online
    var socket = io.connect('http://167.114.246.215:8000');

    // Button 1 on click
    $('#btn-click-1').click(function (){
        var message = "Button 1 clicked !";
        // Transmet le message au server
        socket.emit('btnClick1', message);
    });

    // Button 2 on click
    $('#btn-click-2').click(function (){
        var message = "Button 2 clicked !";
        // Transmet le message au server
        socket.emit('btnClick2', message);
    });

    // Button 3 on click
    $('#btn-click-3').click(function (){
        var message = "Button 3 clicked !";
        // Transmet le message au server
        socket.emit('btnClick3', message);
    });

    // Button 4 on click
    $('#btn-click-4').click(function (){
        var message = "Button 4 clicked !";
        // Transmet le message au server
        socket.emit('btnClick4', message);
    });

    // Button 5 on click
    $('#btn-click-5').click(function (){
        var message = "Button 5 clicked !";
        // Transmet le message au server
        socket.emit('btnClick5', message);
    });

    // Button 6 on click
    $('#btn-click-6').click(function(){
        var message = "Button 6 clicked !";
        // Transmet le message au server
        socket.emit('btnClick6', message);
    });

    // Checkbox 1
    $('#checkbox-1').change(function (){
        if ($('#checkbox-1').checked == true) {
            var message = $('#checkbox-1').prop('checked')
            socket.emit('checkbox1checked', message);
        }else{
            var message = $('#checkbox-1').prop('checked')
            socket.emit('checkbox1unchecked', message);
        };
    });

    // Checkbox 2
    $('#checkbox-2').change(function (){
        if ($('#checkbox-2').checked == true) {
            var message = $('#checkbox-2').prop('checked')
            socket.emit('checkbox2checked', message);
        }else{
            var message = $('#checkbox-2').prop('checked')
            socket.emit('checkbox2unchecked', message);
        };
    });

    // Checkbox 3
    $('#checkbox-3').change(function (){
        if ($('#checkbox-3').checked == true) {
            var message = $('#checkbox-3').prop('checked')
            socket.emit('checkbox3checked', message);
        }else{
            var message = $('#checkbox-3').prop('checked')
            socket.emit('checkbox3unchecked', message);
        };
    });

    // Checkbox 4
    $('#checkbox-4').change(function (){
        if ($('#checkbox-4').checked == true) {
            var message = $('#checkbox-4').prop('checked')
            socket.emit('checkbox4checked', message);
        }else{
            var message = $('#checkbox-4').prop('checked')
            socket.emit('checkbox4unchecked', message);
        };
    });

    // Checkbox 5
    $('#checkbox-5').change(function (){
        if ($('#checkbox-5').checked == true) {
            var message = $('#checkbox-5').prop('checked')
            socket.emit('checkbox5checked', message);
        }else{
            var message = $('#checkbox-5').prop('checked')
            socket.emit('checkbox5unchecked', message);
        };
    });

    // Checkbox 6
    $('#checkbox-6').change(function (){
        if ($('#checkbox-6').checked == true) {
            var message = $('#checkbox-6').prop('checked')
            socket.emit('checkbox6checked', message);
        }else{
            var message = $('#checkbox-6').prop('checked')
            socket.emit('checkbox6unchecked', message);
        };
    });

    // Slider 1 on change
    $('.slider-1-value').html($('#slider-1').attr('value'));

    $('#slider-1').on('input', function (){
        $('.slider-1-value').html(this.value);
    });

    $('#slider-1').change(function (val){
        var val = $('#slider-1').val();
        // Transmet le message au server
        socket.emit('slider1changed', val);
    });

    // Slider 2 on change
    $('.slider-2-value').html($('#slider-2').attr('value'));

    $('#slider-2').on('input', function (){
        $('.slider-2-value').html(this.value);
    });

    $('#slider-2').change(function (val){
        var val = $('#slider-2').val();
        // Transmet le message au server
        socket.emit('slider2changed', val);
    });

    // Slider 3 on change
    $('.slider-3-value').html($('#slider-3').attr('value'));

    $('#slider-3').on('input', function (){
        $('.slider-3-value').html(this.value);
    });

    $('#slider-3').change(function (val){
        var val = $('#slider-3').val();
        // Transmet le message au server
        socket.emit('slider3changed', val);
    });

    // Slider 4 on change
    $('.slider-4-value').html($('#slider-4').attr('value'));

    $('#slider-4').on('input', function (){
        $('.slider-4-value').html(this.value);
    });

    $('#slider-4').change(function (val){
        var val = $('#slider-4').val();
        // Transmet le message au server
        socket.emit('slider4changed', val);
    });

    // Slider 5 on change
    $('.slider-5-value').html($('#slider-5').attr('value'));

    $('#slider-5').on('input', function (){
        $('.slider-5-value').html(this.value);
    });

    $('#slider-5').change(function (val){
        var val = $('#slider-5').val();
        // Transmet le message au server
        socket.emit('slider5changed', val);
    });

    // Slider 6 on change
    $('.slider-6-value').html($('#slider-6').attr('value'));

    $('#slider-6').on('input', function (){
        $('.slider-6-value').html(this.value);
    });

    $('#slider-6').change(function (val){
        var val = $('#slider-6').val();
        // Transmet le message au server
        socket.emit('slider6changed', val);
    });

    // Knob ===================================================================

    // Slider 7 on change
    $('.slider-7-value').html($('#slider-7').attr('value'));

    $('#slider-7').on('input', function (){
        $('.slider-7-value').html(this.value);
    });

    $(function(){

        var slider = $('#slider-7'),
            min = slider.attr('min'),
            max = slider.attr('max'),
            currentValue = $('.slider-7-value');
        
        // Hide the slider
        slider.hide();
        
        $('#control-knob').knobKnob({
            snap : 0,
            value: 90,
            turn : function(ratio){
                // Change the value of the hidden slider
                slider.val(Math.round(ratio*(max-min) + min));
                var val = slider.val() / 100;

                // Transmet le message au server
                socket.emit('slider7changed', val);

                // Update the current value text
                currentValue.html(slider.val());
            }
        });
    });

    // player-play on click
    $('#player-play').click(function(){
        var message = "player-play clicked !";
        // Transmet le message au server
        socket.emit('player-play-click', message);
    });

    // player-pause on click
    $('#player-pause').click(function(){
        var message = "player-pause clicked !";
        // Transmet le message au server
        socket.emit('player-pause-click', message);
    });

    // player-stop on click
    $('#player-stop').click(function(){
        var message = "player-stop clicked !";
        // Transmet le message au server
        socket.emit('player-stop-click', message);
    });

    // player-previous on click
    $('#player-previous').click(function(){
        var message = "player-previous clicked !";
        // Transmet le message au server
        socket.emit('player-previous-click', message);
    });

    // player-next on click
    $('#player-next').click(function(){
        var message = "player-next clicked !";
        // Transmet le message au server
        socket.emit('player-next-click', message);
    });
})();