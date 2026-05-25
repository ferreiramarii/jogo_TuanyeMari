var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');
c.fillStyle = '#000000';
c.fillRect(0, 0, canvas.width, canvas.height);

c.beginPath();
c.arc(676, 322, 40, 0, Math.PI * 2, false);
c.fillStyle = "#ffffff";
c.fill();

var velocidade = 5;
var x = 60;
var y = 80;

var teclas = {};
document.addEventListener("keydown", (event) => {
    teclas[event.key] = true;
});

document.addEventListener("keyup", (event) => {
    teclas[event.key] = false;
});

function animate(){
    requestAnimationFrame(animate);
    c.fillStyle = "#fc0af0";

    if (teclas["ArrowUp"])    y -= velocidade;
    if (teclas["ArrowDown"])  y += velocidade;
    if (teclas["ArrowLeft"])  x -= velocidade;
    if (teclas["ArrowRight"]) x += velocidade;

    c.fillRect(x, y, 60, 60);
    c.clearRect(x, y, 60, 60);

}
animate();