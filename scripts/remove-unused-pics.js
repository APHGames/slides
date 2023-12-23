// this file lists all files that are not referenced from any of the pug files

const fs = require("fs");
const path = require("path");
const utils = require('./utils');

const allPugFiles = utils.searchFiles('slides', ['.pug']);

let pugContent = '';
for(let file of allPugFiles) {
    pugContent += utils.fileToStr(file);
}

let allImages = utils.searchFiles('slides/assets', ['.png', '.svg', '.gif', '.jpg']);
allImages = [...allImages, ...utils.searchFiles('slides/backgrounds', ['.png', '.svg', '.gif', '.jpg'])];

for(let img of allImages) {
    const fileName = path.basename(img);
    if(pugContent.indexOf(fileName) === -1) {
        utils.deleteFile(img);
        console.log(fileName);
    }
}
