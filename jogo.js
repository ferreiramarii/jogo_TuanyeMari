var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');


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
    c.clearRect(x, y, 60, 60);
    c.fillStyle = '#000000';
    c.fillRect(0, 0, canvas.width, canvas.height);

    c.beginPath();
    c.arc(676, 322, 40, 0, Math.PI * 2, false);
    c.fillStyle = "#ffffff";
    c.fill();
    c.fillStyle = "#fc0af0";

    if (teclas["ArrowUp"])    y -= velocidade;
    if (teclas["ArrowDown"])  y += velocidade;
    if (teclas["ArrowLeft"])  x -= velocidade;
    if (teclas["ArrowRight"]) x += velocidade;

    c.fillRect(x, y, 60, 60);

    if((x + 60) > canvas.width){
        x = 0;
        y = 0;

    }
    if((y + 80) > canvas.height){
        x = 0;
        y = 0;
    }
    if((y + 80) < 0){
        x = 0;
        y = 0;
    }
    if((x + 60) < 0){
        x = 0;
        y = 0;

    }
    
    for (var i = 0; i < 10; i++){
        var z = random(0, canvas.widht);
        var w = random(0, canvas.height);
        c.beginPath();
        c.arc(z, w, 10, 0, Math.PI * 2, false);
        c.fillStyle = "#ffff2f";
        c.fill(); 
    }

}

function random(min, max){
    return Math.random() * (max - min) + min;
}

animate();