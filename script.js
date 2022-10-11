let gamespace = document.getElementsByTagName("canvas")[0];
const context = gamespace.getContext('2d');
gamespace.height = window.innerHeight;
gamespace.width = window.innerWidth;
var g = 0.5;
let booljump = true;
let ci;
class Character {
    constructor() {
        this.velocity = { x: 0, y: 0 };
        this.position = { x: 100, y: 200 };
        this.frame = { x: 0, start: 0, end: 1 }
        this.speed = 0;
        this.charimg = new Image();
        this.charimg.src = "images/standright.png";
    }
    removeduplicate() {
        this.speed++;
        if (this.speed % 30 == 0) {
            this.frame.x++;
        }
        if (this.frame.x > this.frame.end) {
            this.frame.x = this.frame.start;
        }
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        if (this.position.y + this.velocity.y <= gamespace.height) {
            this.velocity.y += g;
        }
        else {
            this.velocity.y = 0;
        }
        context.drawImage(this.charimg, 35 * this.frame.x, 0, 35, 38, this.position.x, this.position.y, 60, 60);
    }
}
class Base {
    constructor({ x, y }, width, height) {
        this.position = {
            x, y
        }
        this.width = width;
        this.height = height;
    }
    draw()
    {
        context.fillRect(this.position.x,this.position.y,this.width,this.height);
        context.fillStyle= "#3c2317";
    }
}
class Coin {
    constructor({ x, y }) {
        this.position = {
            x, y
        }
        this.coinimg = new Image();
        this.coinimg.src = "images/coin.png"
    }
    draw() {
        context.drawImage(this.coinimg, 0, 0, 840, 316, this.position.x, this.position.y, 100, 40);
    }
}


const object = new Character();
const multibase=[new Base({x:100,y:600},200,20),new Base({x:400,y:500},200,20),new Base({x:700,y:400},200,20),new Base({x:1100,y:400},200,20),new Base({x:-60,y:700},700,120)
    ,new Base({x:1500,y:520},300,20), new Base({x:1900,y:320},900,720), new Base({x:3100,y:520},250,20), new Base({x:3500,y:320},250,20),new Base({x:3900,y:220},250,20),new Base({x:4300,y:420},900,400),new Base({x:4700,y:320},300,400),
    new Base({x:5200,y:320},300,700),new Base({x:5800,y:320},100,700), new Base({x:6150,y:220},200,20), new Base({x:6550,y:420},200,20)]; 

const coins = [new Coin({ x: 200, y: 660 }), new Coin({ x: 250, y: 660 }), new Coin({ x: 300, y: 660 }), new Coin({ x: 400, y: 660 })];

const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
}
function Move() {

    requestAnimationFrame(Move);
    context.clearRect(0, 0, gamespace.width, gamespace.height);
    context.beginPath();
    object.removeduplicate();
    multibase.forEach((base) => {
        base.draw();
    })
    coins.forEach((coin) => {
        try { coin.draw(); }
        catch (err) { ; }
    })
    if(keys.right.pressed && object. position.x<400)
        object.velocity.x=5;
    else if(keys.left.pressed && object.position.x>0)
        object.velocity.x=-5;
    else 
        object.velocity.x=0;  

    if (keys.right.pressed) {
        multibase.forEach((base) => {
            base.draw();
            base.position.x-=5;
         })
    } 

    multibase.forEach((base) => {
        if (object.position.y + 50 <= base.position.y && object.position.y + 50 + object.velocity.y >= base.position.y && object.position.x + 34 >= base.position.x && object.position.x <= base.position.x + base.width) {
            object.velocity.y = 0;
            booljump = true;
        }
    })

    for (ci = 0; ci < coins.length; ci++) {
        try {
            cop = coins[ci].position
            marp = object.position
            if (marp.y < cop.y && marp.y + 60 > cop.y + 40 && marp.x + 50 > cop.x && marp.x < cop.x + 10) {
                delete coins[ci]
                updatescore(100)
            }
        }
        catch (err) { ; }
    }
}
Move();

let boolrightrun = true;
let boolleftrun = true;
document.onkeydown = (e) => {
    e = e || window.event;
    if (e.key === 'ArrowUp') {
        if (booljump) {
            object.velocity.y = -20;
            booljump = false
        }
        // } else if (e.key === 'ArrowDown') {
        // 
    } else if (e.key === 'ArrowLeft') {
        // object.velocity.x = -5;
        if (boolleftrun) {
            object.frame = { x: 0, start: 0, end: 3 }
            boolleftrun = false;

        }
        object.charimg.src = "images/runleft.png";
        keys.left.pressed=true;

    } else if (e.key === 'ArrowRight') {
        // object.velocity.x = 20;
        object.charimg.src = "images/runright.png";
        if (boolrightrun) {
            object.frame = { x: 0, start: 0, end: 3 }
            boolrightrun = false
        }
        keys.right.pressed=true;
    }
}

document.onkeyup = (e) => {
    e = e || window.event;
    if (e.key === 'ArrowUp') {
        object.velocity.y = 0;
        // } else if (e.key === 'ArrowDown') {
        // 
    } else if (e.key === 'ArrowLeft') {
        object.velocity.x = 0;
        object.charimg.src = "images/standleft.png";
        object.frame = { x: 0, start: 0, end: 1}
        boolleftrun=true;
        keys.left.pressed=false;
    } else if (e.key === 'ArrowRight') {
        object.velocity.x = 0;
        object.charimg.src = "images/standright.png";
        object.frame = { x: 0, start: 0, end: 1}
        boolrightrun=true;
        keys.right.pressed=false;
    }
}

function ttimer() {
    let timer = document.getElementById('timer');
    let inittime = 60;
    timer.innerText = inittime;
    function updatetimer() {
        inittime--;
        timer.innerText = inittime;
        if (inittime == 0) {
            clearInterval(updatetime)
        }
    }
    const updatetime = setInterval(updatetimer, 1000)
}
ttimer();

let lives = document.getElementById('nofl');
let initlives = 3;
lives.innerText = "X" + initlives;
function updatelives() {
    initlives--;
    lives.innerText = "X" + initlives;
}
// updatelives

let score = document.getElementById('score');
let initscore = 0;
score.innerText = "SCORE:" + initscore;
function updatescore(n) {
    initscore += n;
    score.innerText = "SCORE:" + initscore;
}