import {Column} from "./column.js";

const cvs = document.getElementById('cvs');
const ctx = cvs.getContext('2d');

cvs.width = window.innerWidth;
cvs.height = window.innerHeight;

const FONT_SIZE = 16;
ctx.font = `bold ${FONT_SIZE}px monospace`;

const columns = [];
const columnsCount = cvs.width / FONT_SIZE;
for(let i = 0; i < columnsCount; i++){
    columns.push(new Column(i * FONT_SIZE, FONT_SIZE, cvs.height, ctx))
}

function animate(){
    ctx.fillStyle = "rgba(0,0,0,.05)";
    ctx.fillRect(0,0,cvs.width,cvs.height )

    ctx.fillStyle = "green";
    columns.forEach(column => column.drawSymbol());

    setTimeout(()=> requestAnimationFrame(animate), 50)
}

animate();