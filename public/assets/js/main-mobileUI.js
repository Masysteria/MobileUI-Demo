(function(){
    // load mobileUI.js
    $('body').append("<script src='assets/mobileUI/js/mobileUI.js'></script>");

    // localhost
    // var socket = io.connect('http://localhost:8888');

    // online
    var socket = io.connect('http://167.114.246.215:8000');

    // --------------------------------------
    //              Socket.io
    // --------------------------------------

    // Button 1 on click
    socket.on('btnClick1', function (message){
        $('body').append('<h3>' + message + '</h3>');
    });

    // Button 2 on click
    socket.on('btnClick2', function (message){});

    // Button 3 on click
    socket.on('btnClick3', function (message){});

    // Button 4 on click
    socket.on('btnClick4', function (message){});

    // Button 5 on click
    socket.on('btnClick5', function (message){});

    // Button 6 on click
    socket.on('btnClick6', function (message){});

    // Checkbox 1
    socket.on('checkbox1checked', function (message){
        $('body').append('<h3>Checkbox 1 checked : ' + message + '</h3>');
    });

    socket.on('checkbox1unchecked', function (message){
        $('body').append('<h3>Checkbox 1 checked : ' + message + '</h3>');
    });

    // Checkbox 2
    socket.on('checkbox2checked', function (message){});
    socket.on('checkbox2unchecked', function (message){});

    // Checkbox 3
    socket.on('checkbox3checked', function (message){});
    socket.on('checkbox3unchecked', function (message){});

    // Checkbox 4
    socket.on('checkbox4checked', function (message){});
    socket.on('checkbox4unchecked', function (message){});

    // Checkbox 5
    socket.on('checkbox5checked', function (message){});
    socket.on('checkbox5unchecked', function (message){});

    // Checkbox 6
    socket.on('checkbox6checked', function (message){});
    socket.on('checkbox6unchecked', function (message){});

    // Slider 3 on change
    socket.on('slider3changed', function (val){});

    // Slider 4 on change
    socket.on('slider4changed', function (val){});

    // Slider 5 on change
    socket.on('slider5changed', function (val){});

    // Slider 6 on change
    socket.on('slider6changed', function (val){});

    // player-play on click
    socket.on('player-play-click', function (message){
        start();
    });

    // player-pause on click
    socket.on('player-pause-click', function (message){
        pause();
    });

    // player-stop on click
    socket.on('player-stop-click', function (message){
        stop();
    });

    // player-previous on click
    socket.on('player-previous-click', function (message){});

    // player-next on click
    socket.on('player-next-click', function (message){});

    // --------------------------------------
    //         Demo (Web Audio APi)
    // --------------------------------------

    // Declare les variables
    var context,
        soundSource,
        buffer,
        analyser,
        gainNode,
        biquadFilter,
        canvas,
        url = 'assets/sound/The Bobos (instrumentale).mp3';

    // Initialise the Audio Context the smart way
    function initAudioContext() {
        context = new AudioContext();
    };
    
    // Load the Sound with XMLHttpRequest
    function start() {
        // Note: this will load asynchronously
        var getSound = new XMLHttpRequest();
        getSound.open("GET", url, true);
        // Read as binary data
        getSound.responseType = "arraybuffer"; 

        // Asynchronous callback
        getSound.onload = function() {
            var data = getSound.response;
            audioRouting(data);
        };
        getSound.send();
    };

    function audioRouting(data) {
        // Create a sound source
        soundSource = context.createBufferSource();
        // Create an Analyser
        analyser = context.createAnalyser();
        // Create the gainNode (Volume)
        gainNode = context.createGain();
        // Create the lowpassFilter
        lowpassFilter = context.createBiquadFilter();
        // Create the highpassFilter
        highpassFilter = context.createBiquadFilter();

        // SetUp of the lowpass Biquad filter
        lowpassFilter.type = "lowpass";
        lowpassFilter.frequency.value = 10000;

        // SetUp of the highpass Biquad filter
        highpassFilter.type = "highpass";
        highpassFilter.frequency.value = 0;

        // SetUp of the analyser
        analyser.smoothingTimeConstant = 0.7;
        analyser.fftSize = 2048;

        // connect nodes to each other
        soundSource.connect(analyser);
        analyser.connect(lowpassFilter);
        lowpassFilter.connect(highpassFilter);
        highpassFilter.connect(gainNode);

        // Slider 1 on change
        socket.on('slider1changed', function (val){
            lowpassFilter.frequency.value = val;
        });

        // Slider 2 on change
        socket.on('slider2changed', function (val){
            highpassFilter.frequency.value = val;
        });

        // // Slider 7 on change
        socket.on('slider7changed', function (val){
            gainNode.gain.value = val;
        });

        // Create source buffer from raw binary
        context.decodeAudioData(data, function(buffer){ 
            // Add buffered data to object
            soundSource.buffer = buffer;

            // Connect node to output
            gainNode.connect(context.destination);

            // Pass the object to the play function
            playSound(soundSource);

            // Execute the visualizer
            frameLooper();
        });
    };

    // Tell the Source when to play
    function playSound() {
        soundSource.start(context.currentTime);
        gainNode.gain.value = 0.25;
    };

    // Tell the Source when to pause
    function pause() {
        if(context.state === "running"){
            context.suspend();
        }else if(context.state === "suspended"){
            context.resume();
        };
    };

    // Tell the Source when to stop
    function stop() {
        if (context.state === "suspended") {
            context.resume();
            soundSource.stop(context.currentTime);
        }else{
            soundSource.stop(context.currentTime);
        };
    };

    canvas = document.getElementById("canvas");
    ctx = canvas.getContext('2d');

    function frameLooper(){
        window.requestAnimationFrame(frameLooper);

        analyserArray = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(analyserArray);

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        var my_gradient = ctx.createLinearGradient(0,0,0,170);

        my_gradient.addColorStop(0,"#fc0000");
        my_gradient.addColorStop(0.2,"#fc0000");
        my_gradient.addColorStop(0.7,"#a200e8");
        my_gradient.addColorStop(1,"#1a54f2");
        
        ctx.fillStyle = my_gradient;

        bars = 100;

        for (var i = 0; i < bars; i++) {
            bar_x = i * 3;
            bar_width = 2;
            bar_height = -(analyserArray[i] / 2);
            ctx.fillRect(bar_x, canvas.height, bar_width, bar_height);
        };
    };

    // init audio context
    initAudioContext();

})();

