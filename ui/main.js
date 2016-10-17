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
    var obj_request = new XMLHttpRequest();
    obj_request.onreadystatechange = function () {
        if (obj_request.readyState === XMLHttpRequest.DONE) {
            if (obj_request.status === 200) {
                var vist_counter = obj_request.responseText;
                var cntspan = document.getElementById('count');
                cntspan.innerHTML = vist_counter.toString();            
            }
        }
    }
    
    obj_request.open('GET', 'http://karthikeyannatesan.imad.hasura-app.io/counter', true);
    obj_request.send(null);
}