// ============== Hearts =====================

const heartCount = document.getElementById("heart")

const hearts = document.getElementsByClassName("heart-icon")

for (let i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener("click", function () {
        heartCount.innerText = parseInt(heartCount.innerText) + 1
    })
}

// document.getElementsByClassName("heart-icon").addEventListener("click", function(){
//     let count = parseInt(heartCount.innerText)
//     heartCount.innerText = count + 1
// })


// ===================== Copy ====================

const copyCount = document.getElementById("copy-count")
const copyButtons = document.getElementsByClassName("btn-copy")

for (let i = 0; i < copyButtons.length; i++) {
    copyButtons[i].addEventListener("click", function () {
        copyCount.innerText = parseInt(copyCount.innerText) + 1
    })
}



// ================= coins ==================


const coins = document.getElementById("coin")
const callButtons = document.getElementsByClassName("btn-call")
const historyList = document.getElementById("history-list")
const clearBtn = document.getElementById("clear-history")

function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;

    return hours + ":" + minutes + ":" + seconds;
}

for (let i = 0; i < callButtons.length; i++) {
    callButtons[i].addEventListener("click", function () {
        const card = this.parentElement.parentElement;
        const service = card.querySelector("h3").innerText;
        const number = card.querySelector("h1").innerText;

        alert("Calling " + service + " " + number + "...");

        let currentCoin = parseInt(coins.innerText);
        if (currentCoin >= 20) {
            coins.innerText = currentCoin - 20;
        } else {
            coins.innerText = 0;
            alert("Not enough coins!");
            return; // coin na thakle history add hobe na
        }

        // History entry div create
        const entry = document.createElement("div");
        entry.classList.add("history-entry", "p-3","mb-3","rounded-lg","text-xl","font-semibold" ,"bg-[#F5FFF6]", "flex", "justify-between", "items-center");

        // left side: service name + number
        const leftDiv = document.createElement("div");
        leftDiv.classList.add("flex", "flex-col");

        // service name
        const serviceEl = document.createElement("div");
        serviceEl.innerText = service;
        serviceEl.classList.add("font-bold");

        // number
        const numberEl = document.createElement("div");
        numberEl.innerText = number;
        numberEl.classList.add( );

        // append service + number to leftDiv
        leftDiv.appendChild(serviceEl);
        leftDiv.appendChild(numberEl);

        // right side: time
        const timeEl = document.createElement("div");
        timeEl.innerText = getCurrentTime();
        timeEl.classList.add();

        // append left + right to entry
        entry.appendChild(leftDiv);
        entry.appendChild(timeEl);

        // prepend to history list
        historyList.prepend(entry);

    });
}

// Clear history
clearBtn.addEventListener("click", function () {
    historyList.innerHTML = "";
});



