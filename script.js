let gamespace = document.getElementsByTagName("canvas")[0];
const context = gamespace.getContext('2d');
gamespace.height = window.innerHeight;
gamespace.width = window.innerWidth;
var g = 0.5;
class Character {
    constructor() {
        this.velocity = { x: 0, y: 5 };
        this.position = { x: 100, y: 600 };
        this.frame = { x: 0, speed: 0, start: 0, end: 1}
        this.charimg = new Image();
        this.charimg.src = "images/standright.png";
    }
    removeduplicate() {
        this.frame.speed++;
        if (this.frame.speed % 30 == 0) {
            this.frame.x++;
        }
        if (this.frame.x > this.frame.end) {
            this.frame.x = this.frame.start;
        }
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        if (this.position.y+this.velocity.y<=gamespace.height) {
            this.velocity.y += g;
        }
        else {
            this.velocity.y = 0;
        }
        context.drawImage(this.charimg, 35 * this.frame.x, 0, 35, 38, this.position.x, this.position.y, 60, 60);
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
const multibase=[new Base({x:100,y:400},200,20),new Base({x:400,y:200},200,20),new Base({x:700,y:100},200,20),new Base({x:1100,y:200},200,20),new Base({x:-60,y:700},700,120)
,new Base({x:1500,y:520},300,20), new Base({x:1900,y:320},900,720), new Base({x:3100,y:520},250,20)]; 
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
    // if(keys.right.pressed && object. position.x<400)
    //     object.velocity.x=5;
    // else if(keys.left.pressed && object.position.x>0)
    //     object.velocity.x=-5;
    // else 
    //     object.velocity.x=0;  
    
    if(keys.right.pressed)
    {
        multibase.forEach((base)=> {
            base.draw();
            base.position.x+=5;
         })
    } 
    else if(keys.left.pressed)
    { 
        multibase.forEach((base)=> {
            base.draw();
            base.position.x-=5;
         })
         
    }


    
    multibase.forEach((base)=> {
    if(object.position.y+50<=base.position.y && object.position.y+50+object.velocity.y>=base.position.y && object.position.x+33>=base.position.x && object.position.x<=base.position.x+base.width)
    {
        object.velocity.y=0; 
    }})
    
}
Move();

let boolrightrun = true;
let boolleftrun = true;
document.onkeydown = (e) => {
    e = e || window.event;
    if (e.key === 'ArrowUp') {
        object.velocity.y = -15;
        // } else if (e.key === 'ArrowDown') {
        // object.radius=5;
    } else if (e.key === 'ArrowLeft') {
        object.velocity.x = -5;
        if (boolleftrun){
            object.frame = { x: 0, speed: 0, start: 0, end: 3}
            boolleftrun=false;
        }
        object.charimg.src = "images/runleft.png";

    } else if (e.key === 'ArrowRight') {
        object.velocity.x = 5;
        object.charimg.src = "images/runright.png";
        if (boolrightrun) {
            object.frame = { x: 0, speed: 0, start: 0, end: 3}
            boolrightrun = false
        }
    }
}

document.onkeyup = (e) => {
    e = e || window.event;
    if (e.key === 'ArrowUp') {
        object.velocity.y = 0;
        // } else if (e.key === 'ArrowDown') {
        //     object.radius=10;
    } else if (e.key === 'ArrowLeft') {
        object.velocity.x = 0;
        object.charimg.src = "images/standleft.png";
        object.frame = { x: 0, speed: 0, start: 0, end: 1}
        boolleftrun=true;
    } else if (e.key === 'ArrowRight') {
        object.velocity.x = 0;
        object.charimg.src = "images/standright.png";
        object.frame = { x: 0, speed: 0, start: 0, end: 1}
        boolrightrun=true;
    }
}