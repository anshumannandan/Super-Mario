let gamespace=document.getElementsByTagName("canvas")[0];

const context = gamespace.getContext('2d');
gamespace.height=innerHeight;
gamespace.width=innerWidth;
var g=0.5;

class Character{
    constructor(){
        this.velocity={x:0,y:5};
        this.position={x:100,y:100};
    
        this.sAngle=0;
        this.eAngle=2*Math.PI;
        this.radius=15;
    }
    removeduplicate()
    {
        this.draw();
        this.position.x+=this.velocity.x;
        this.position.y+=this.velocity.y;
        if(object.position.y<0.69*gamespace.height)
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
        // context.lineWidth=18;
        // context.strokeStyle='blue';
        // context.stroke();
        context.fillStyle='red';
        context.fill();
    }  
}
class Base{
    constructor(){
        this.position={x:200,y:100};
        this.width=200;
        this.height=20;
    }
    draw()
    {
        context.fillStyle='green';
        context.fillRect(this.position.x,this.position.y,this.width,this.height);
    }
}
const base=new Base();  

const object=new Character();  


function Move(){
    
    requestAnimationFrame(Move);
    context.clearRect(0, 0, gamespace.width, gamespace.height);
    context.beginPath();
    object.removeduplicate();
    base.draw();

    if(object.position.y+2*object.radius<=base.position.y)
    {
        
        if(object.position.x>base.position.x && object.position.x<base.position.x+base.width)
            object.velocity.y=0;

    }    
}
Move();

document.onkeydown = (e) => {
    e = e || window.event;
    if (e.key === 'ArrowUp') {
        object.velocity.y=-25;
    } else if (e.key === 'ArrowDown') {
        object.radius=5;
    } else if (e.key === 'ArrowLeft') {
        object.velocity.x=-5;
    } else if (e.key === 'ArrowRight') {
        object.velocity.x=5;
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
