const MAX_LENGHT = 131


let textbox = document.getElementById('textbox')
let button = document.getElementById('sendbutton')
let nevels = document.getElementById('nevels')
let day = new Date()
let date = `${day.getDate()}/0${day.getMonth() + 1}/${day.getFullYear()}, ${day.getHours()}:${day.getMinutes()}`
let dateTxt = document.getElementById('dateTxt')

let caracteresCounter = document.getElementById('caracteresCounter')

dateTxt.innerHTML = date

//Send nevel
button.onclick = function send(event) {   
    let value = textbox.value
    let newNevel = document.createElement('li')
    newNevel.textContent = textbox.value
        if (Object.keys(value).length > 131) {
                textbox.value = ' '
        } else {
                //nevels.appendChild(newNevel)
                nevels.insertBefore(newNevel, nevels.childNodes[0]);
                textbox.value = ' '
        }
        //Nevels Storage
        function nevelsStorage() {
                button.addEventListener('click',  () => {
                localStorage.setItem('nevel', value)
                }) 
        }
        nevelsStorage()
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






