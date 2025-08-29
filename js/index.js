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

for (let i = 0; i < callButtons.length; i++){
    callButtons[i].addEventListener("click", function(){

        const card = this.parentElement.parentElement
        const cardName = card.querySelector("p").innerText
        const number = card.querySelector("h1").innerText


        alert("Calling " + cardName +" "+ number +"...")

        let currentCoin = parseInt(coins.innerText)

        if (currentCoin >= 20){
            coins.innerText = currentCoin - 20
        }
        else{
            coins.innerText = 0
            alert("Not enough coins!")
        }
    })
} 