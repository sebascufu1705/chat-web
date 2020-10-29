
const db = firebase.firestore();


const messages = [];



const chat = document.querySelector('.chat');

chat.addEventListener('submit', function (event) {
    event.preventDefault();

    const newMessage = {
        message: chat.message.value
    };


    db.collection("messages").add(newMessage);
    console.log(newMessage);


});
//leer datos
var showMessage = document.getElementById('chat__box');
db.collection("messages").orderBy("date");
db.collection("messages").onSnapshot((querySnapshot) => {
    querySnapshot.forEach((doc) => {

       
        //show.classList.add('messagess');
        
        showMessage.innerHTML = '';
        console.log(`${doc.id} => ${doc.data().message}`);

        showMessage.innerHTML += `
        
        <div class="chat__box">
        <p> ${doc.data().message} </p> <br>
        </div>
        
        
        `;
        //showMessage.appendChild(show);
    });
});
