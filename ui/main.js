console.log('Loaded!');

var myimg = document.getElementById('myimg');
var marginleft = 0;

function moveMarginLeft()
{
    if (marginleft <= 400) {
        marginleft = marginleft + 1;
        myimg.style.marginLeft = marginleft + 'px';
    }
    else {
        marginleft = 0;
        myimg.style.marginLeft = '0px';        
    }
}

myimg.onclick = function () {
        interval = setInterval(moveMarginLeft, 100);
};

var cntbutton = document.getElementById('counter');

cntbutton.onclick = function () {
    alert(`button is clicked!`);
}