console.log('Loaded!');

var myimg = document.getElementById('myimg');
var marginleft = 0;

function moveMarginLeft()
{
    marginleft = marginleft + 1;
    myimg.style.marginLeft = marginleft + 'px';
}

myimg.onclick = function () {
    if (marginleft == 0) {
        var interval = setInterval(moveMarginLeft, 10);
    }
    else {
        myimg.style.marginLeft = '0px';
    }
};