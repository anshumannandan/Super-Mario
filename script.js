let gamespace=document.getElementsByTagName("canvas")[0];
const context = gamespace.getContext('2d');
gamespace.height=innerHeight;
gamespace.width=innerWidth;
var g=0.5;
class Character{
    constructor(){
        this.velocity={x:0,y:5}; 
        this.position={x:100,y:600};
        this.height=50;
        this.width=50;
    }
    removeduplicate()
    {
        this.draw();
        this.position.x+=this.velocity.x;
        this.position.y+=this.velocity.y;
        if(this.position.y+this.height+this.velocity.y<=gamespace.height)
            this.velocity.y+=g;
        else
            this.velocity.y=0;
    }
    draw(){
        context.fillRect(this.position.x,this.position.y,this.width,this.height);
        context.fillStyle='red';
        context.fill();
    }  
}
class Base{
    constructor({x,y},width,height)
    {
        this.position={
            x,y
        }
        this.width=width;
        this.height=height;
    }
    draw()
    {
        context.fillRect(this.position.x,this.position.y,this.width,this.height);
        context.fillStyle='green';
        context.fill();
    }
} 
const object=new Character();  
// const base=new Base();
const multibase=[new Base({x:100,y:400},200,20),new Base({x:400,y:200},200,20),new Base({x:700,y:100},200,20),new Base({x:1100,y:200},200,20),new Base({x:-60,y:700},700,120)
,new Base({x:1500,y:520},300,20), new Base({x:1900,y:320},900,720)]; 
const keys={
    right:{
        pressed:false
    },
    left:{
        pressed:false
    }
}
function Move(){
    
    requestAnimationFrame(Move);
    context.clearRect(0, 0, gamespace.width, gamespace.height);
    context.beginPath();
    object.removeduplicate();
    multibase.forEach((base)=> {
        base.draw();
     })
    if(keys.right.pressed && object. position.x<400)
        object.velocity.x=5;
    else if(keys.left.pressed && object.position.x>0)
        object.velocity.x=-5;
    else 
        object.velocity.x=0;  
    
    if(keys.right.pressed)
    {
        multibase.forEach((base)=> {
            base.draw();
            base.position.x-=5;
         })
    } 
    else if(keys.left.pressed)
    { 
        multibase.forEach((base)=> {
            base.draw();
            base.position.x+=5;
         })
         
    }

    
    multibase.forEach((base)=> {
    if(object.position.y+object.height<=base.position.y && object.position.y+object.height+object.velocity.y>=base.position.y && object.position.x+object.width>=base.position.x && object.position.x<=base.position.x+base.width)
    {
        object.velocity.y=0; 
    }})
    
}
Move();

document.onkeydown = (e) => {
    e = e || window.event;
    if (e.key === 'ArrowUp' ) {
        object.velocity.y=-20; 
    } 
    else if (e.key === 'ArrowLeft') {
        object.velocity.x=-5;
        keys.left.pressed=true;
    } else if (e.key === 'ArrowRight') {
        keys.right.pressed=true;
    }
  }

  document.onkeyup = (e) => {
    e = e || window.event;
    if (e.key === 'ArrowUp') {
      object.velocity.y=0;
    }
    else if (e.key === 'ArrowLeft') {
        keys.left.pressed=false;
    } else if (e.key === 'ArrowRight') {
        keys.right.pressed=false;
    }
  }


  
