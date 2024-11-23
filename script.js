let bunga = document.getElementById('bunga');
let bingkai = document.getElementById('bingkai');
let love = document.getElementById('love');
let text = document.getElementById('text');
let button = document.getElementById('button');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    bunga.style.left = value * 0.25 + 'px';
    love.style.top = value * -0.5 + 'px';
    text.style.marginBottom = value * 1 + 'px';
    button.style.marginBottom = value * 1 + 'px';
});