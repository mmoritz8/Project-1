document.ready(function () {


    var i = 0;
    function adverts() {
        interval = setInterval(function () {
            var imagesA = ['../assets/Images/tdAmeritrade.jpg', '../assets/Images/invesco.jpg', '../assets/Images/fidelity.png'];
            var imagesB = ['../assets/Images/ally.jpg', '../assets/Images/marketWatch.png', '../assets/Images/wells-fargo.jpg'];
            // var i = 0;
            $('.adv-pic-a').attr('src', imagesA[i]);
            $('.adv-pic-b').attr('src', imagesB[i]);
            i++;
            if (i > imagesA.length) {
                i = 0
            }
        }, 4000);
    }
    adverts();
});