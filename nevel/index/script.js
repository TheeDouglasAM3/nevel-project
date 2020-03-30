const MAX_LENGHT = 131


let textbox = document.getElementById('textbox')
let button = document.getElementById('sendbutton')
let nevels = document.getElementById('nevels')
let day = new Date()
let date = `${day.getDate()}/0${day.getMonth() + 1}/${day.getFullYear()}, ${day.getHours()}:${day.getMinutes()}`
let dateTxt = document.getElementById('dateTxt')

let caracteresCounter = document.getElementById('caracteresCounter')

dateTxt.innerHTML = date

showNevelMessages()

//Send nevel
button.onclick = function send(event) {   

        let value = textbox.value

        if (Object.keys(value).length > 131) {
                textbox.value = ' '
        } else {
                //nevels.appendChild(newNevel)
                _insertMessage(textbox.value)
                textbox.value = ' '
                storeNevelMessages()
        }   
} 

textbox.onkeyup = function counterC(event) {
        //Disable and able button
        let counterValue =  MAX_LENGHT - textbox.value.length
        // @ts-ignore
        caracteresCounter.innerHTML = counterValue
        if (counterValue === MAX_LENGHT) {
                button.setAttribute('disabled', '')
        } else {
                button.removeAttribute('disabled')
        }
        //Button color change
        if (textbox.value.length > 121) {
                document.getElementById('sendbutton').style.backgroundColor = '#ff5c5c'
                document.getElementById('caracteresCounter').style.color = '#ff5c5c'
                document.getElementById('sendbutton').style.color = 'aliceblue'
        } else if (textbox.value.length > 111) {
                document.getElementById('sendbutton').style.backgroundColor = '#fcc68b'
                document.getElementById('caracteresCounter').style.color = '#fcc68b'
        } else {
                document.getElementById('sendbutton').style.backgroundColor = 'aliceblue'
                document.getElementById('caracteresCounter').style.color = '#808185'
                document.getElementById('sendbutton').style.color = '#131313'
        } 
}

function showNevelMessages(){
        let msgs = JSON.parse(localStorage.getItem('nevelListMessages'))

        if(msgs){
                msgs.reverse()
                msgs.forEach(elem => _insertMessage(elem))
        }
        
}

function storeNevelMessages(){
        let nevelMsgs = _getNevelCurrentMessages();
        localStorage.setItem('nevelListMessages', JSON.stringify(nevelMsgs))
}

function _getNevelCurrentMessages(){
        let nevelMsgsHTML = document.querySelectorAll('.nevelMsg')
        let nevelMsgs = []
        nevelMsgsHTML.forEach( elem => {
                nevelMsgs.push(elem.textContent)
        })
        return nevelMsgs
}

function _insertMessage(message){
        let newNevel = document.createElement('li')
        newNevel.className = 'nevelMsg'
        newNevel.textContent = message
        nevels.insertBefore(newNevel, nevels.childNodes[0])
}








