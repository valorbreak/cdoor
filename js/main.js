$(function() {
    // Change this value to adjust the amount of blur
    var BLUR_RADIUS = 100;

    var canvas = document.querySelector('[data-canvas]');
    var canvasContext = canvas.getContext('2d');

    var image = new Image();
    image.src = document.querySelector('[data-canvas-image]').src;

    var drawBlur = function() {
        var w = canvas.width;
        var h = canvas.height;
        canvasContext.drawImage(image, 0, 0, w, h);
        stackBlurCanvasRGBA('heroCanvas', 0, 0, w, h, BLUR_RADIUS);
    };

    image.onload = function() {
        drawBlur();
    }
});




$(document).ready(function(){

    // Snow
    $.fn.snow({
        minSize: 5, // Minimumsize of the snowflake (px)
        maxSize: 25, // Maximum size of the snowflake (px)
        newOn: 350, // Frequency they fall (ms)
        flakeColor: '#FFF' // Colour of the snowflake
    });


    // Rotating Images

    var images =
        [
            'assets/img/Boston.jpg',
            'assets/img/christmas-hd-wallpaper-vorjrqbx.jpg',
            'assets/img/druplicon.small_.png',
            'assets/img/inconceivable.jpg'
        ];

    $('img.rotatingImage').attr({"src": images[Math.floor(Math.random() * images.length)]});

    function logoTextChange(){

        var headerColors = [
          '#3498DB',
          '#E74C3C',
          '#82BF56',
          '#F2CF66',
          '#FFF',
        ];
        $('.rotateColor1').css({"color": headerColors[Math.floor(Math.random() * images.length)]});
        $('.rotateColor2').css({"color": headerColors[Math.floor(Math.random() * images.length)]});
        $('.rotateColor3').css({"color": headerColors[Math.floor(Math.random() * images.length)]});
    }

    setInterval(logoTextChange, 1500);
});


