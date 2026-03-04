const fillbar = document.getElementById("fillbar")
let timer = 0;
const totalTime = 36001; // (36000s / 60m) = 10 hours :DDDDDDDDDDDDDDDDDDD

function countTimer() {
    if (timer < totalTime) {
        timer++;
        fillbar.style.width = String((timer / totalTime) * 100) + '%';
        console.log(String((timer / totalTime) * 100) + '%');
        setTimeout(countTimer, 1000);
    } else {
        console.log("Finished!")
    }
}

countTimer();
