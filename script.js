let gamespace=document.getElementsByTagName("canvas")[0];

const context = gamespace.getContext('2d');
gamespace.height=innerHeight;
gamespace.width=innerWidth;
var g=0.98;
class Character{
    constructor(){
        this.velocity={x:0,y:5};
        this.position={x:100,y:100};
    
        this.sAngle=0;
        this.eAngle=2*Math.PI;
        this.radius=10;
    }
    removeduplicate()
    {
        this.draw();
        this.position.x+=this.velocity.x;
        this.position.y+=this.velocity.y;
        if(object.position.y<0.7*gamespace.height)
        {
            this.velocity.y+=g;
        }
        else
        {
            this.velocity.y=0;
        }
        
    }
    draw(){
        context.arc(this.position.x,this.position.y,this.radius,this.sAngle,this.eAngle);
        context.lineWidth=18;
        context.strokeStyle='blue';
        context.stroke();
        context.fillStyle='red';
        context.fill();
    }  
}
      
const object=new Character();  
function Move(){
    
    requestAnimationFrame(Move);
    context.clearRect(0, 0, gamespace.width, gamespace.height);
    context.beginPath();
    object.removeduplicate();
    
}
Move();
var i=1;

document.onkeydown = (e) => {
    e = e || window.event;
    if(i=1)
    {
    if (e.key === 'ArrowUp') {
        object.velocity.y=-20;
    } else if (e.key === 'ArrowDown') {
        object.radius=5;
    } else if (e.key === 'ArrowLeft') {
        object.velocity.x=-5;
    } else if (e.key === 'ArrowRight') {
        object.velocity.x=5;
    }
    i=0;
    }
  }

  document.onkeyup = (e) => {
    e = e || window.event;
    if (e.key === 'ArrowUp') {
      object.velocity.y=0;
    } else if (e.key === 'ArrowDown') {
        object.radius=10;
    } else if (e.key === 'ArrowLeft') {
        object.velocity.x=0;
    } else if (e.key === 'ArrowRight') {
        object.velocity.x=0;
    }
  }
