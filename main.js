let canvas = document.getElementById("canvas");
canvas.width = document.documentElement.clientWidth
canvas.height = document.documentElement.clientHeight//拉伸canvas会变形，所以需要获取屏幕的宽高
let ctx = canvas.getContext("2d");
ctx.fillStyle = "black";//填充样式
ctx.strokeStyle = 'none'
ctx.lineWidth = 8
var isTouchDevice = 'ontouchstart' in document.documentElement//判断是否在移动端
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.closePath();
    ctx.stroke();
}//画线
let painting = false
let last
if (isTouchDevice) {
    console.log("这是移动端")//换为触屏事件
    canvas.ontouchstart = (e) => {
        last = [e.touches[0].clientX, e.touches[0].clientY]
    }
    canvas.ontouchmove = (e) => {
        let x = e.touches[0].clientX
        let y = e.touches[0].clientY
        drawLine(last[0], last[1], x, y)
        last = [e.touches[0].clientX, e.touches[0].clientY]
    }
} else {
    canvas.onmousedown = (e) => {
        last = [e.clientX, e.clientY]
        painting = true
    }
    canvas.onmouseup = () => {
        painting = false
    }
    canvas.onmousemove = (e) => {
        if (painting === true) {
            drawLine(last[0], last[1], e.clientX, e.clientY)
            last = [e.clientX, e.clientY]
        }
        else {

        }
    }
}



