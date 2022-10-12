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
const multibase=[new Base({x:0,y:750},1000,80),new Base({x:1050,y:675},130,20),new Base({x:1250,y:575},130,20),new Base({x:1450,y:750},500,80),new Base({x:2100,y:675},130,20),new Base({x:2300,y:720},130,20)
,new Base({x:2550,y:675},500,140),new Base({x:3200,y:720},130,20),new Base({x:3400,y:750},800,80),new Base({x:4250,y:675},130,20),new Base({x:4200,y:475},130,20),new Base({x:4450,y:575},130,20),
new Base({x:4450,y:375},130,20),new Base({x:4700,y:650},130,20),new Base({x:4950,y:750},800,80),new Base({x:5900,y:650},130,20),new Base({x:6250,y:750},70,80),new Base({x:6420,y:650},70,20),
new Base({x:6650,y:750},400,80),new Base({x:7200,y:650},130,20),new Base({x:7450,y:750},500,80),new Base({x:8100,y:650},130,20),new Base({x:8430,y:550},130,20),new Base({x:8700,y:550},130,20),
new Base({x:8930,y:450},130,20),new Base({x:9200,y:650},130,20),new Base({x:9450,y:750},500,80),new Base({x:10000,y:650},130,20),new Base({x:10200,y:550},130,20),new Base({x:10000,y:450},130,20)
,new Base({x:10400,y:650},130,20),new Base({x:10400,y:450},130,20),new Base({x:10600,y:550},130,20),new Base({x:11050,y:750},500,80),new Base({x:11650,y:600},130,20),new Base({x:11900,y:700},130,20),
new Base({x:12200,y:750},500,80),new Base({x:12800,y:600},130,20),new Base({x:13000,y:750},130,20),new Base({x:13200,y:600},130,20),new Base({x:13000,y:500},130,20),new Base({x:13500,y:700},130,20),
new Base({x:13800,y:750},500,80),new Base({x:14600,y:750},500,80)]; 

const coins = [new Coin({ x: 1105, y: 640 }),new Coin({ x: 1305, y: 540 }),new Coin({ x: 2155, y: 640 }),new Coin({ x: 2355, y: 685 }),new Coin({ x: 3255, y: 685 }),new Coin({ x: 4305, y: 640 }),
    new Coin({x:4255,y:440}),new Coin({x:4505,y:540}),new Coin({x:4505,y:340}),new Coin({x:4755,y:615}),new Coin({x:5955,y:615}),new Coin({x:6440,y:615}),new Coin({x:7255,y:615}),new Coin({x:7505,y:715})
,new Coin({x:8485,y:515}),new Coin({x:8755,y:515}),new Coin({x:8985,y:415}),new Coin({x:9255,y:615}),new Coin({x:10055,y:615}),new Coin({x:10255,y:515}),new Coin({x:10055,y:415}),new Coin({x:10455,y:615}),
new Coin({x:10455,y:415}),new Coin({x:10655,y:515}),new Coin({x:11705,y:565}),new Coin({x:11955,y:665}),new Coin({x:12855,y:565}),new Coin({x:13055,y:715}),new Coin({x:13255,y:565}),new Coin({x:13255,y:565}),
new Coin({x:13055,y:465}),new Coin({x:13255,y:565}),new Coin({x:13555,y:665}),new Coin({x:13855,y:715}),new Coin({x:13960,y:715})];

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

    if (keys.right.pressed) {
        coins.forEach((coin) => {
            coin.draw();
            coin.position.x-=5;
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
            object.velocity.y = -15;
            booljump = false
        }
    } else if (e.key === 'ArrowLeft') {
        if (boolleftrun) {
            object.frame = { x: 0, start: 0, end: 3 }
            boolleftrun = false;

        }
        object.charimg.src = "images/runleft.png";
        keys.left.pressed=true;

    } else if (e.key === 'ArrowRight') {
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

let score = document.getElementById('score');
let initscore = 0;
score.innerText = "SCORE:" + initscore;
function updatescore(n) {
    initscore += n;
    score.innerText = "SCORE:" + initscore;
}