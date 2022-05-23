
let arrBox = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "0"];

let slideXY = {
    "1": { "X": 0, "Y": 0 }, "2": { "X": 0, "Y": 0 }, "3": { "X": 0, "Y": 0 }, "4": { "X": 0, "Y": 0 },
    "5": { "X": 0, "Y": 0 }, "6": { "X": 0, "Y": 0 }, "7": { "X": 0, "Y": 0 }, "8": { "X": 0, "Y": 0 },
    "9": { "X": 0, "Y": 0 }, "10": { "X": 0, "Y": 0 }, "11": { "X": 0, "Y": 0 }, "12": { "X": 0, "Y": 0 },
    "13": { "X": 0, "Y": 0 }, "14": { "X": 0, "Y": 0 }, "15": { "X": 0, "Y": 0 }
}


function slide(elem) {
    let tag = document.getElementsByClassName(elem)[0];

    let tagNum = tag.innerHTML;

    let tagNumIndex = arrBox.indexOf(tagNum);

    if (tagNumIndex !== 3 && tagNumIndex !== 7 && tagNumIndex !== 11 && tagNumIndex !== 15) {
        
        if (arrBox[tagNumIndex + 1] === "0") {

            shift(tag, tagNum, tagNumIndex, 100, 0, 1);

            return;
        }
    }

    if (tagNumIndex !== 0 && tagNumIndex !== 4 && tagNumIndex !== 8 && tagNumIndex !== 12) {
        
        if (arrBox[tagNumIndex - 1] === "0") {

            shift(tag, tagNum, tagNumIndex, -100, 0, -1);

            return;
        }
    }
    if (tagNumIndex < 12) {
        
        if (arrBox[tagNumIndex + 4] === "0") {

            shift(tag, tagNum, tagNumIndex, 0, 100, 4);

            return;
        }
    }
    if (tagNumIndex > 3) {
        
        if (arrBox[tagNumIndex - 4] === "0") {

            shift(tag, tagNum, tagNumIndex, 0, -100, -4);

            return;
        }
    }

    console.log("isBlocked");

}

function shift(tag, tagNum, tagNumIndex, addX, addY, indexArrBox) {
    let slideX = slideXY[tagNum].X;
    let slideY = slideXY[tagNum].Y;

    slideX += addX;
    slideY += addY;

    arrBox[tagNumIndex + indexArrBox] = tagNum;
    arrBox[tagNumIndex] = "0";

    slideXY[tagNum].X = slideX;
    slideXY[tagNum].Y = slideY;

    tag.style = `transform: translate(${slideX.toString()}%, ${slideY.toString()}%);`;

}

function getNoBlockedRandomTagsSlide() {
    let tagZeroIndex = arrBox.indexOf("0");
    let arrNoBlockedTag = [];

    if (tagZeroIndex !== 3 && tagZeroIndex !== 7 && tagZeroIndex !== 11 && tagZeroIndex !== 15) {
        arrNoBlockedTag.push(arrBox[tagZeroIndex + 1]);
    }
    if (tagZeroIndex !== 0 && tagZeroIndex !== 4 && tagZeroIndex !== 8 && tagZeroIndex !== 12) {
        arrNoBlockedTag.push(arrBox[tagZeroIndex - 1]);
    }
    if (tagZeroIndex < 12) {
        arrNoBlockedTag.push(arrBox[tagZeroIndex + 4]);
    }
    if (tagZeroIndex > 3) {
        arrNoBlockedTag.push(arrBox[tagZeroIndex - 4]);
    }

    let indexRandom = Math.round(Math.random() * (arrNoBlockedTag.length - 1));
    let numRandom = arrNoBlockedTag[indexRandom];
    let tagRandom = "tag" + numRandom;

    slide(tagRandom);

}

function mixNumbers() {
    for (let i = 0; i < 1000; i++) {
        getNoBlockedRandomTagsSlide();
    }
}

