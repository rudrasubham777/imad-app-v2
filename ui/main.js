console.log('Loaded!');
// cahnge the text here
var element = document.getElementById('main-text');
element.innerHTML = 'new value';

//move the image
var img = document.getElementById('madi');
img.onclick=function(){
    img.style.marginleft='100px';
}