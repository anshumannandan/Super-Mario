const gamespace=document.getElementsByTagName("canvas")[0];

const context = gamespace.getContext('2d');
gamespace.height=innerHeight;
gamespace.width=innerWidth;
class Character{
    draw(){
        context.arc(100,100,10,0,2*Math.PI);
        context.lineWidth=18;
        context.strokeStyle='blue';
        context.stroke();
        context.fillStyle='red';
        context.fill();
    }
}
const object=new Character();  
object.draw();