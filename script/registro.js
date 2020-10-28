const db = firebase.firestore();
const usersRef = db.collection('users');

const register = document.querySelector('.register');

register.addEventListener('submit', function (event) {
  event.preventDefault();


  const password = register.password.value;
  const name = register.name.value;
 

  firebase.auth().createUserWithEmailAndPassword(name, password)
  .then(function (credentials) {

    const uid = credentials.user.uid;

    usersRef.doc(uid).set({
      name: name,
     
    })
    .then(function () {
      window.location.href = 'index.html';
    });

  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(error)

    register.querySelector('.form__error').classList.remove('hidden');

  });
});