let world = {
    x : 0,
    y : 0,
    angle : Math.PI / 3
};

let Point = class {
    constructor(name = "point", x, y, z){
        this.name = name;
        this.center = {
            x : world.x,
            y : world.y
        };
        this.x = x;
        this.y = y;
        this.z = z;
    }

    set setWorld(center){
        this.center.x = world.x;
        this.center.y = world.y;
    }

    convertTo2d(angle){
        let dX = (this.center.x + this.x) + this.z * Math.cos(angle);
        let dY = (this.center.y - this.y) + this.z * Math.cos(angle - Math.PI);
        return {
            x : dX,
            y : dY
        };
    }

    static draw(context,name, x ,y){
        context.save();
        context.translate(x,y);
        context.moveTo(0,-10);
        context.lineTo(0,10);
        context.moveTo(-10,0);
        context.lineTo(10,0);
        context.moveTo(0,0);
        context.arc(0,0,5,0,Math.PI *2);
        context.textAlign = "right";
        context.textBaseline = "top";
        context.font = "15px Arial";
        context.fillText(name, -5, 5);
        context.restore();
        context.stroke();
    }

    show(){
        console.log(this.name + " " + this.x + "," + this.y + "," + this.z);
        console.log(this.center);
    }
};

function  degToRad(angle) {
    return angle * Math.PI / 180;
}

function rotate3dX(x, y, z, angle) {
    let a = degToRad(angle);
    let dy = y * Math.cos(a) - z * Math.sin(a);
    let dz = y * Math.sin(a) + z * Math.cos(a);
    return {
        x : x,
        y : dy,
        z : dz
    };
}

function rotate3dY(x, y, z, angle) {
    let a = degToRad(angle);
    let dz = z * Math.cos(a) - x * Math.sin(a);
    let dx = z * Math.sin(a) - x * Math.cos(a);
    return {
        x : dx,
        y : y,
        z : dz
    };
}

function rotate3dZ(x, y, z, angle) {
    let a = degToRad(angle);
    let dx = x * Math.cos(a) - y * Math.sin(a);
    let dy = x * Math.sin(a) + y * Math.cos(a);
    return {
        x : dx,
        y : dy,
        z : z
    };
}

let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");
cvs.width = document.body.offsetWidth;
cvs.height = document.body.offsetHeight;

world.x = cvs.width / 2;
world.y = cvs.height / 2;
world.angle = Math.PI / 2;

let points = [];

points.push(new Point("center",0,0,0));
points.push(new Point("dz",0,0,100));
points.push(new Point("dy",0,100,0));
points.push(new Point("dx",100,0,0));

let rAngle = 0;
function animate() {
    //ctx.clearRect(0, 0, cvs.width, cvs.height);
    cvs.height = cvs.height;
    points.forEach((point) => {
        let temp = rotate3dX(point.x, point.y, point.z, rAngle);
        temp = rotate3dY(temp.x, temp.y, temp.z, rAngle + 1);
        temp = rotate3dZ(temp.x, temp.y, temp.z, rAngle + 3);
        let p = new Point(point.name, temp.x, temp.y, temp.z);
        let dp = p.convertTo2d(world.angle);
        Point.draw(ctx, p.name, dp.x, dp.y);
    });
    rAngle +=1;
}
setInterval(animate, 100);