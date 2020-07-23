export default function(ocavs){
    // var ocavs = document.getElementsByTagName("canvas")[0];
    var ctx = ocavs.getContext("2d");
    var w = ocavs.width;
   var h = ocavs.height;
   var lastPoint = {};
   var newPoint = {}
//    console.log(w,h)
    ctx.fillStyle = "#ccc";
    ctx.fillRect(0, 0, w, h);
    // 设置遮罩层，等下涂掉的是这一层
    // ctx.font = "30px Georgia";
    // var bg = ctx.createLinearGradient(0, 0, w, 0);
    // bg.addColorStop(0, "#f40")
    // bg.addColorStop(0.5, "#f50")
    // bg.addColorStop(1, "#f04")
    // ctx.fillStyle = bg
    // ctx.fillText("刮一刮有惊喜", 10, 90);
    // ctx.strokeStyle = "red";

    // ctx.strokeRect(10,10,100,100)
    ctx.globalCompositeOperation = 'destination-out';
   
    // var img = new Image();
    // img.src = "./adbg_01.png"
    // img.onload = function(){
    //     var bg = ctx.createPattern(img,"repeat");
    //     ctx.fillStyle = img
    //     ctx.fillRect(0,0,w,h)
    // }
    // ctx.globalCompositeOperation = "destination-out";
    function clear() {
                ctx.strokeStyle = "red";
             
       ctx.lineTo(newPoint.x,newPoint.y);
       ctx.lineWidth = 30;
       ctx.lineCap = "round"
       ctx.lineJoin = "round"
       ctx.stroke()
       
        // ctx.arc(newPoint.x, newPoint.y, 10, 0, Math.PI*2, 0);
        // ctx.fill();
    }
    function clearCanvas(){
        var imageData = ctx.getImageData(0,0,w,h);

        var len = imageData.data.length;
        var count = 0;
        for(var i = 0;i < len;i += 4){
            if(imageData.data[i] === 0){//变成透明
                count ++;
            }
        }
        if(count > len / 4 * 0.7){
            console.log(1)
            ctx.clearRect(0,0,w,h)
        }
    }
    ocavs.onmousedown = function (e) {
        console.log("in")
        var leftD = this.offsetLeft;
        var topD = this.offsetTop;
        lastPoint.x = e.clientX - leftD;
        lastPoint.y = e.clientY - topD;
        ctx.beginPath();//按下抬起就是一条路径就行了
        ctx.moveTo(lastPoint.x,lastPoint.y);
        document.onmousemove = function (e) {
            newPoint.x = e.clientX - leftD;
            newPoint.y = e.clientY - topD;           
            clear();
          
            
        }
        document.onmouseup = function () {
            ctx.closePath()
            this.onmousemove = null;
            this.onmouseup = null;
            clearCanvas()
        }
    }
}