import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-e475e-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const endorsmentsInDB = ref(database, "endorsements")

const inputFieldEl = document.getElementById("input")
const publishBtnEl = document.getElementById("publish-btn")
const endorsementsListEl = document.getElementById("endorsements-list")

publishBtnEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    
    // push("endorsmentsInDB", inputValue)
    
    console.log(inputValue)
    
    clearInputFieldEl()
})


function clearInputFieldEl() {
    inputFieldEl.value = ""
}