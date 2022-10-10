let gamespace = document.getElementsByTagName("canvas")[0];
const context = gamespace.getContext('2d');
gamespace.height = window.innerHeight;
gamespace.width = window.innerWidth;
var g = 0.69;
class Character {
    constructor() {
        this.velocity = { x: 0, y: 0 };
        this.position = { x: 100, y: 100 };
        this.frame = { x: 0, speed: 0, start: 0, end: 1, width: 26}
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
        if (object.position.y < 0.5 * gamespace.height) {
            this.velocity.y += g;
        }
        else {
            this.velocity.y = 0;
        }
        context.drawImage(this.charimg, this.frame.width * this.frame.x, 0, this.frame.width, 38, this.position.x, this.position.y, 60, 60);
    }
}
class Base {
    constructor() {
        this.position = { x: 200, y: 100 };
        this.width = 200;
        this.height = 20;
    }
    draw() {
        context.fillStyle = 'green';
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}
const base = new Base();

const object = new Character();


function Move() {

    context.clearRect(0, 0, gamespace.width, gamespace.height);
    context.beginPath();
    object.removeduplicate();


    base.draw();

    if (object.position.y <= base.position.y) {

        if (object.position.x > base.position.x && object.position.x < base.position.x + base.width)
            object.velocity.y = 0;

    }
    requestAnimationFrame(Move);
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
        object.velocity.x = -3;
        if (boolleftrun){
            object.frame = { x: 0, speed: 0, start: 0, end: 3, width: 35}
            boolleftrun=false;
        }
        object.charimg.src = "images/runleft.png";

    } else if (e.key === 'ArrowRight') {
        object.velocity.x = 3;
        object.charimg.src = "images/runright.png";
        if (boolrightrun) {
            object.frame = { x: 0, speed: 0, start: 0, end: 3, width: 35}
            boolrightrun = false
        }
    }
    // object.removeduplicate()
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
        object.frame = { x: 0, speed: 0, start: 0, end: 1, width: 26}
        boolleftrun=true;
    } else if (e.key === 'ArrowRight') {
        object.velocity.x = 0;
        object.charimg.src = "images/standright.png";
        object.frame = { x: 0, speed: 0, start: 0, end: 1, width: 26}
        boolrightrun=true;
    }
}