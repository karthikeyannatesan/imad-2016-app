console.log('Loaded!');

var myimg = document.getElementById('myimg');
var marginleft = 0;

function moveMarginLeft()
{
    marginleft = marginleft + 1;
    myimg.style.marginLeft = marginleft + 'px';
}

myimg.onclick = function () {
    var interval;
    clearInterval(interval);
    if (marginleft === 0) {
        interval = setInterval(moveMarginLeft, 10);
    }
    else {
        marginleft = 0;
        myimg.style.marginLeft = '0px';
    }
};