let cvs = document.querySelector('canvas');
let ctx = cvs.getContext('2d');

class Point {
    constructor(x, y, z) {
        this.name = "point";
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

function convertTo2d(x, y, points) {
    let tempArray = [];
    points.forEach((point)=>{
        let drawX = (x + point.x) + point.z * Math.cos(Math.PI / 3);
        let drawY = (y - point.y) + point.z * Math.cos(Math.PI / 3 - Math.PI);

        let temp = {
            name : point.name,
            x : drawX,
            y : drawY
        };

        tempArray.push(temp);
    });
    return tempArray;
}


let center = {
    x : cvs.width/2,
    y : cvs.height/2
};


let points = [];
points.push(new Point(0,0,0,"center"));
points.push(new Point(100,0,0,"x"));
points.push(new Point(0,100,0,"y"));
points.push(new Point(0,0,100,"z"));

let points2d = convertTo2d(30, cvs.height - 30, points);

points2d.forEach((point) => {
    ctx.moveTo(points2d[0].x, points2d[0].y);
    ctx.lineTo(point.x, point.y);
    ctx.stroke();

    ctx.font = "20px Arial";
    ctx.fillText(point.name, point.x, point.y);
    ctx.fill();
});

let cubeVertexs = [
    [0,0,0],[100,0,0],[100,100,0],[0,100,0],[0,0,100],[100,0,100],[100,100,100],[0,100,100]
];

let cubePoints = [];
cubeVertexs.forEach((point) => {
    cubePoints.push(new Point(point[0],point[1],point[2]));
});

let cube2d = convertTo2d(center.x, center.y, cubePoints);

ctx.fillStyle = "rgba(0,0,255,0.5)";
ctx.beginPath();
ctx.moveTo(cube2d[4].x, cube2d[4].y);
ctx.lineTo(cube2d[5].x, cube2d[5].y);
ctx.lineTo(cube2d[6].x, cube2d[6].y);
ctx.lineTo(cube2d[7].x, cube2d[7].y);
ctx.closePath();
ctx.fill();
ctx.fillStyle = "rgba(0,255,0,0.5)";
ctx.beginPath();
ctx.moveTo(cube2d[0].x, cube2d[0].y);
ctx.lineTo(cube2d[1].x, cube2d[1].y);
ctx.lineTo(cube2d[5].x, cube2d[5].y);
ctx.lineTo(cube2d[4].x, cube2d[4].y);
ctx.closePath();
ctx.fill();
ctx.fillStyle = "rgba(255,0,0,0.5)";
ctx.beginPath();
ctx.moveTo(cube2d[0].x, cube2d[0].y);
ctx.lineTo(cube2d[4].x, cube2d[4].y);
ctx.lineTo(cube2d[7].x, cube2d[7].y);
ctx.lineTo(cube2d[3].x, cube2d[3].y);
ctx.closePath();
ctx.fill();
ctx.fillStyle = "rgba(255,0,0,0.8)";
ctx.beginPath();
ctx.moveTo(cube2d[0].x, cube2d[0].y);
ctx.lineTo(cube2d[1].x, cube2d[1].y);
ctx.lineTo(cube2d[2].x, cube2d[2].y);
ctx.lineTo(cube2d[3].x, cube2d[3].y);
ctx.closePath();
ctx.fill();
ctx.fillStyle = "rgba(0,255,0,0.8)";
ctx.beginPath();
ctx.moveTo(cube2d[1].x, cube2d[1].y);
ctx.lineTo(cube2d[5].x, cube2d[5].y);
ctx.lineTo(cube2d[6].x, cube2d[6].y);
ctx.lineTo(cube2d[2].x, cube2d[2].y);
ctx.closePath();
ctx.fill();
ctx.fillStyle = "rgba(0,0,255,0.8)";
ctx.beginPath();
ctx.moveTo(cube2d[3].x, cube2d[3].y);
ctx.lineTo(cube2d[2].x, cube2d[2].y);
ctx.lineTo(cube2d[6].x, cube2d[6].y);
ctx.lineTo(cube2d[7].x, cube2d[7].y);
ctx.closePath();
ctx.fill();