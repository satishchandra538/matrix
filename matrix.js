const canvas = document.querySelector('#canvas');
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%".split('');
var font_size = 12;
var column = canvas.width / font_size;
var drops = [];
for (let i = 0; i < column; i++) {
    drops[i] = 1;
}
var y = 0, x = 0, count = 0, text;
const draw = () => {
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#0f0";
    ctx.font = `${font_size}px arial`;
    for (let i = 0; i < drops.length; i++) {
        count % 2 > 0 ? text = matrix[Math.floor(Math.random() * matrix.length)] : text = String.fromCharCode(Math.floor(Math.random() * 500));
        ctx.fillText(text, i * font_size, drops[i] * font_size);
        if (drops[i] * font_size > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
    count++;
}

setInterval(draw, 35);