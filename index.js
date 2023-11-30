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
const endorsementsListEl = document.getElementById("endorsments-list")

publishBtnEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    
    push(endorsmentsInDB, inputValue)
    
    clearInputFieldEl()
})

onValue(endorsmentsInDB, function(snapshot) {
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())
        
        clearEndorsementsListEl()
        
        for (let i = 0; i < itemsArray.length; i++) {
            let currentItem = itemsArray[i]
            let itemID = currentItem[0]
            let itemValue = currentItem[1]
            
            appendItemToEndorsementsListEl(currentItem)
        }
    } else {
        endorsementsListEl.innerHTML = `<p>No Endorsments... yet</p>`
    }
})

function appendItemToEndorsementsListEl(item) {
    let itemID = item[0]
    let itemValue = item[1]
    
    let newEl = document.createElement("li")
    
    newEl.textContent = itemValue
    
    endorsementsListEl.append(newEl)
}

function clearInputFieldEl() {
    inputFieldEl.value = ""
}

function clearEndorsementsListEl() {
    endorsementsListEl.innerHTML = ""
}