//      KEYCODE/COUNTER PROGRAM
//      Counter values 
let count = 0;
let count2 = 0;
let count3 = 0;

let keyCode = false;

//      Code checker
function checkCode() {
    if (count === 7 && count2 === 3 && count3 === 9) {
        if (!keyCode) { // prevents alert spam
            keyCode = true;
            console.log("Correct Code");
            alert("Code Unlocked");
            window.location.href="vicrory_room.html";
        }
    } else {
        keyCode = false;
    }
}

//      Counter 1 
const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");

increaseBtn.onclick = function () {
    count++;
    if (count > 9) count = 0;
    countLabel.textContent = count;
    checkCode(); //calls function after every change 
};

decreaseBtn.onclick = function () {
    count--;
    if (count < 0) count = 9; //does same loop but backwards
    countLabel.textContent = count;
    checkCode();
};

//      Counter 2 
const decreaseBtn2 = document.getElementById("decreaseBtn2");
const increaseBtn2 = document.getElementById("increaseBtn2");
const countLabel2 = document.getElementById("countLabel2");

increaseBtn2.onclick = function () {
    count2++;
    if (count2 > 9) count2 = 0;
    countLabel2.textContent = count2;
    checkCode();
};

decreaseBtn2.onclick = function () {
    count2--;
    if (count2 < 0) count2 = 9;
    countLabel2.textContent = count2;
    checkCode();
};

//      Counter 3 
const decreaseBtn3 = document.getElementById("decreaseBtn3");
const increaseBtn3 = document.getElementById("increaseBtn3");
const countLabel3 = document.getElementById("countLabel3");

increaseBtn3.onclick = function () {
    count3++;
    if (count3 > 9) count3 = 0;
    countLabel3.textContent = count3;
    checkCode();
};

decreaseBtn3.onclick = function () {
    count3--;
    if (count3 < 0) count3 = 9;
    countLabel3.textContent = count3;
    checkCode();
};
