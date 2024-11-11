export const hippoInit = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const backgrounds = ['#a5d6a7', '#ffe082', '#ffab91', '#b0bec5', '#9fa8da', '#ef9a9a', '#ce93d8'];
    let dot = $('.dot');
    let hotspot = $('.item');
    let circle = $('.circle');
    let itemX = Math.floor((Math.random() * screenWidth) + 1);
    let itemY = Math.floor((Math.random() * screenHeight) + 1);
    let circleWidth = 30;
    let circleHeight = 30;

    function moveCircle(e) {
        TweenLite.to(circle, {
            css: {
                left: e.pageX,
                top: e.pageY
            }
        });
    }

    $(window).on('mousemove', moveCircle);

    $('.item').css('top', itemY);
    $('.item').css('left', itemX);

    function absorbed(dot, hotspot) {
        var x1 = dot.offset().left;
        var y1 = dot.offset().top;
        var h1 = dot.outerHeight(true);
        var w1 = dot.outerWidth(true);
        var b1 = y1 + h1;
        var r1 = x1 + w1;
        var x2 = hotspot.offset().left;
        var y2 = hotspot.offset().top;
        var h2 = hotspot.outerHeight(true);
        var w2 = hotspot.outerWidth(true);
        var b2 = y2 + h2;
        var r2 = x2 + w2;

        if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
            return false
        } else {
            itemX = Math.floor((Math.random() * screenWidth) + 1);
            itemY = Math.floor((Math.random() * screenHeight) + 1);
            $('.item').css('top', itemY);
            $('.item').css('left', itemX);
            $(dot).css('height', circleHeight += 30);
            $(dot).css('width', circleWidth += 30);
        }
    }

    window.setInterval(function () {
        absorbed(dot, hotspot);
        if (dot.width() > screenWidth / 2 && dot.height() > screenHeight / 2) {
            let randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
            setTimeout(() => {
                let randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
                $(dot).css('height', circleHeight = 30);
                $(dot).css('width', circleWidth = 30);
                $('body').css('background-color', randomBackground);
            }, 2000);
            $('body').css('background-color', randomBackground);
            console.log('level 1 complete');
        }
    }, 200);
}