const socket = io();

const btnSend = document.getElementById('send-message');
const allMessage = document.getElementById('all-message');

btnSend.addEventListener('click', () => {
    const message = document.getElementById("message");
    if (message.value !== "") {
      socket.emit("message", message.value);
      message.value = "";
      return "";
    }


});

// socket.on("messages", () => {

// });

socket.on("message", ({ user, message }) => {
    const msg = document.createRange().createContextualFragment(`
    <div class="message">
          <div class="image-container">
            <img  src="https://www.nautiljon.com/images/perso/00/50/kirito_8805.webp" alt="">
          </div>
          <div class="message-body">
            <div class="user-info">
              <span class="username">${user}</span>
            </div>
            <p>${message}</p>
          </div>
        </div>
    `);
    allMessage.appendChild(msg);
});