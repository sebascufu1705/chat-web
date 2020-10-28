
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

    //messages.push(newMessage);

    //renderProducts(products);
});