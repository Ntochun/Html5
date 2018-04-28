class Cube{
    constructor(x, y, z, length){
        this.x = x;
        this.y = y;
        this.z = z;
        this.length = length;
    };

    getFace(){
        let vertex = [
            {x : this.x - this.length / 2, y : this.y - this.length / 2, z : this.z - this.length / 2},
            {x : this.x + this.length / 2, y : this.y - this.length / 2, z : this.z - this.length / 2},
            {x : this.x + this.length / 2, y : this.y + this.length / 2, z : this.z - this.length / 2},
            {x : this.x - this.length / 2, y : this.y + this.length / 2, z : this.z - this.length / 2},
            {x : this.x - this.length / 2, y : this.y - this.length / 2, z : this.z + this.length / 2},
            {x : this.x + this.length / 2, y : this.y - this.length / 2, z : this.z + this.length / 2},
            {x : this.x + this.length / 2, y : this.y + this.length / 2, z : this.z + this.length / 2},
            {x : this.x - this.length / 2, y : this.y + this.length / 2, z : this.z + this.length / 2},
        ];

        let face = [
            [vertex[0], vertex[1], vertex[2], vertex[3]],
            [vertex[4], vertex[5], vertex[6], vertex[7]],
            [vertex[1], vertex[5], vertex[6], vertex[2]],
            [vertex[0], vertex[4], vertex[7], vertex[3]],
            [vertex[0], vertex[1], vertex[4], vertex[5]],
            [vertex[3], vertex[2], vertex[6], vertex[7]]
        ];
    }

}

/**
 * convert the 3d point to 2d point to show on the screen
 * @param point {x, y, z}
 * @param center {x, y}
 * @param angle number
 * @returns {{x: *, y: number}}
 */
function convertTo2d(point, angle){
    let dX =  point.x + point.z * Math.cos(angle);
    let dY = -point.y + point.z * Math.cos(angle - Math.PI);
    return {
        x : dX,
        y : dY
    };
}

let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");
let cube = new Cube(cvs.width / 2, cvs.height / 2, 0);
let cubFace = cube.getFace();

cubFace.forEach((face) => {
    let f = [];
    face.forEach((vertex) => {
        let p = convertTo2d(vertex, Math.PI / 3);

    });
});