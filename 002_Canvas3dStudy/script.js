let cvs = document.querySelector('canvas');
let ctx = cvs.getContext('2d');

class Point {
    constructor(x, y, z, name) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.name = name;
    }
}

// 根据 perspective 和 z 获取三维坐标对应二维坐标的xy缩放值
function getScaleByZ(z, p=800) {
    let scale;
    if (z > p) {
        scale = Infinity;
    } else {
        scale = p / (-z + p);
    }
    return scale;
}

function convertTo2d(x, y, points) {
    let tempArray = [];
    points.forEach((point)=>{
        let scale = getScaleByZ(point.z);
        let drawX = (x + point.x) * scale;
        let drawY = (y + point.y) * scale;

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

let points2d = convertTo2d(cvs.width / 2, cvs.height / 2, points);

points2d.forEach((point) => {
    ctx.moveTo(points2d[0].x, points2d[0].y);
    ctx.lineTo(point.x, point.y);
    ctx.stroke();

    ctx.font = "20px Arial";
    ctx.fillText(point.name, point.x, point.y);
    ctx.fill();
});
