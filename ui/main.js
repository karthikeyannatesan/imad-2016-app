console.log('Loaded!');

var myimg = document.getElementById('myimg');
var marginleft = 0;

function moveMarginLeft()
{
    marginleft = marginleft + 1;
    myimg.style.marginLeft = marginleft + 'px';
}

myimg.onclick = function () {
    var interval = setInterval(moveMarginLeft, 10);
};