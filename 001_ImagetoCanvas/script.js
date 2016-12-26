/**
 * Created by vmt on 2016/12/26.
 */
function addInput(id) {
    var obj = document.createElement("input");
    obj.addEventListener("change", readFile, false);
    obj.type = "file";
    obj.accepts = "image/*";
    obj.id = id;
    obj.click();
}

function readFile() {
    var file = this.files[0];
    if (!/image\/\w+/.test(file.type)) {
        alert("Please open the Image files!");
        return false;
    }
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        drawImage(this.result);
    }
}

function drawImage(imageUrl) {
    var cvs = document.querySelector("#canvas");
    var ctx = cvs.getContext("2d");
    var img = new Image();
    img.src = imageUrl;
    img.onload = function () {
        var size = imgSize(img.width, img.height, 1200, 600);
        setCSize(cvs, size.w, size.h);
        ctx.drawImage(img, 0, 0, size.w, size.h);
    }
}

function imgSize(imgWith, imgHeight, winWidth, winHeight) {
    if (imgWith > winWidth || imgHeight > winHeight) {
        if (winWidth > winHeight) {
            var offset = (winHeight - 20) / imgHeight;
        }
        else {
            var offset = (winWidth - 20) / imgWith;
        }
        return {
            w: offset * imgWith,
            h: offset * imgHeight
        };
    }
    else {
        return {
            w: imgWith,
            h: imgHeight
        };
    }
}

function setCSize(canvas, num1, num2) {
    canvas.width = num1;
    canvas.height = num2;
}