const send_button = document.getElementById('enviar')
const text_box = document.getElementById('texto')
const chat_box = document.getElementById('mensagens')

const socket = io()

function sendMessage(){
    console.log('message sent')
    if(text_box.value){
        socket.emit('new message', text_box.value)
        text_box.value = ''
    }
}
send_button.addEventListener('click', sendMessage)
text_box.addEventListener('keypress', (key) => {if(key.key === 'Enter'){sendMessage()}})

function messageReceived(message){
    const message_element = document.createElement('li') //<li><\li>
    
    message_element.textContent = message //<li>message<\li>
    message_element.classList.add('mensagem') //<li class='mensagem'>message<\li>
    
    chat_box.appendChild(message_element) //<div id='mensagens'><li class='mensagem'>message<\li></div>
}
socket.addEventListener('new message', messageReceived)