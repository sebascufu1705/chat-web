var firebaseConfig = {
    apiKey: "AIzaSyDuUBu43NzY8dwaOXngCeP5K5Za2TbitBI",
    authDomain: "chat-7947c.firebaseapp.com",
    databaseURL: "https://chat-7947c.firebaseio.com",
    projectId: "chat-7947c",
    storageBucket: "chat-7947c.appspot.com",
    messagingSenderId: "199262917224",
    appId: "1:199262917224:web:5f738371346dd70ba561dd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
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